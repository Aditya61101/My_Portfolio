"use client";

import { Grid, Line, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame, useThree, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import type { CoreSceneProps, ModuleId } from "./core-types";

type Point = [number, number, number];
const mint = "#53ffd0";
const teal = "#12b692";
const cyan = "#70dcff";
const cameraHome: Point = [8.2, 6.0, 8.8];
const modules: { id: ModuleId; position: Point; color: string }[] = [
  { id: "agent", position: [-3.38, -0.32, 0], color: mint },
  { id: "backend", position: [0, 0.02, -3.42], color: cyan },
  { id: "system", position: [0, -0.88, 3.56], color: mint },
  { id: "product", position: [3.55, -0.72, 0], color: teal },
];
const corners = [-1, 1].flatMap((x) => [-1, 1].flatMap((y) => [-1, 1].map((z) => [x, y, z] as Point)));
const drift = 2.9;

function glowTexture() {
  const size = 48;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const radius = Math.hypot(x / (size - 1) - 0.5, y / (size - 1) - 0.5) * 2;
      const i = (y * size + x) * 4;
      pixels[i] = pixels[i + 1] = pixels[i + 2] = 255;
      pixels[i + 3] = Math.round(255 * Math.max(0, 1 - radius) ** 2.8);
    }
  }
  const texture = new THREE.DataTexture(pixels, size, size);
  texture.needsUpdate = true;
  return texture;
}

function Glow({ texture, color = mint, opacity = 0.7, scale }: {
  texture: THREE.Texture; color?: string; opacity?: number; scale: number;
}) {
  return (
    <sprite scale={[scale, scale, 1]}>
      <spriteMaterial
        map={texture} color={color} opacity={opacity} blending={THREE.AdditiveBlending}
        transparent depthWrite={false} toneMapped={false}
      />
    </sprite>
  );
}

function WireBox({ size, color = mint, opacity = 0.75 }: { size: Point; color?: string; opacity?: number }) {
  const [x, y, z] = size;
  const geometry = useMemo(() => {
    const box = new THREE.BoxGeometry(x, y, z);
    const edges = new THREE.EdgesGeometry(box);
    box.dispose();
    return edges;
  }, [x, y, z]);
  useEffect(() => () => geometry.dispose(), [geometry]);
  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={color} opacity={opacity} transparent depthWrite={false} toneMapped={false} />
    </lineSegments>
  );
}

const tiers = [
  { width: 3.04, height: 0.45, y: -1.12, surface: "#10342e", intensity: 0.22 },
  { width: 2.58, height: 0.31, y: -0.73, surface: "#176657", intensity: 0.38 },
  { width: 2.12, height: 0.16, y: -0.46, surface: "#229984", intensity: 0.48 },
];

function Platform({ texture }: { texture: THREE.Texture }) {
  return (
    <>
      <group position={[0, -1.29, 0]}>
        <Glow texture={texture} scale={5} opacity={0.26} />
      </group>
      {tiers.map(({ width, height, y, surface, intensity }) => (
        <group key={y} position={[0, y, 0]}>
          <RoundedBox args={[width, height, width]} radius={0.055} smoothness={2}>
            <meshStandardMaterial color={surface} metalness={0.62} roughness={0.35} emissive={teal} emissiveIntensity={intensity} />
          </RoundedBox>
          <WireBox size={[width + 0.018, height + 0.022, width + 0.018]} color={teal} opacity={0.6} />
          <group position={[0, height / 2 + 0.034, 0]}>
            <WireBox size={[width * 0.92, 0.028, width * 0.92]} opacity={0.75} />
          </group>
        </group>
      ))}
    </>
  );
}

function CoreCube({ texture }: { texture: THREE.Texture }) {
  const shell = useRef<THREE.Group>(null);
  const nucleus = useRef<THREE.Group>(null);
  const elapsed = useRef(0);
  useFrame((_, delta) => {
    elapsed.current += Math.min(delta, 0.05);
    const time = elapsed.current;
    if (shell.current) {
      shell.current.rotation.y = -0.09 + time * 0.19;
      shell.current.position.y = 0.81 + Math.sin(time * 0.75) * 0.065;
    }
    if (nucleus.current) {
      nucleus.current.rotation.y = -time * 0.44;
      nucleus.current.rotation.z = 0.30 + Math.sin(time * 0.5) * 0.09;
    }
  });

  return (
    <group ref={shell} position={[0, 0.81, 0]}>
      <Glow texture={texture} scale={3.8} opacity={0.29} />
      <RoundedBox args={[1.96, 1.96, 1.96]} radius={0.085} smoothness={3}>
        <meshPhysicalMaterial color="#33b7a1" emissive="#05765e" emissiveIntensity={0.63}
          roughness={0.29} metalness={0.19} transparent opacity={0.50} depthWrite={false} />
      </RoundedBox>
      <WireBox size={[1.95, 1.95, 1.95]} />
      <WireBox size={[1.76, 1.76, 1.76]} color={teal} opacity={0.31} />
      <WireBox size={[2.03, 0.06, 2.03]} color={cyan} opacity={0.55} />
      <group position={[0, -0.91, 0]}>
        <WireBox size={[1.92, 0.04, 1.92]} opacity={0.96} />
      </group>
      <group ref={nucleus} rotation={[0.42, 0, 0.30]}>
        <mesh>
          <octahedronGeometry args={[0.86, 0]} />
          <meshStandardMaterial color="#154c42" emissive={teal} emissiveIntensity={0.58} metalness={0.64} roughness={0.29} />
        </mesh>
        <WireBox size={[1.13, 1.13, 1.13]} color={mint} opacity={0.71} />
        <Glow texture={texture} color={cyan} scale={1.45} opacity={0.52} />
      </group>
      {corners.map(([x, y, z]) => (
        <mesh key={`${x}${y}${z}`} position={[x * 0.9, y * 0.9, z * 0.9]}>
          <boxGeometry args={[0.07, 0.07, 0.07]} />
          <meshBasicMaterial color={mint} toneMapped={false} />
        </mesh>
      ))}
      <group position={[0, 0.1, 0.99]}>
        <Line points={[[-0.39, 0.13, 0], [-0.56, 0, 0], [-0.39, -0.13, 0]]} color={mint} lineWidth={1.8} />
        <Line points={[[0.39, 0.13, 0], [0.56, 0, 0], [0.39, -0.13, 0]]} color={mint} lineWidth={1.8} />
        <Line points={[[0.11, 0.19, 0], [-0.11, -0.19, 0]]} color={mint} lineWidth={1.8} />
      </group>
    </group>
  );
}

function ModuleNode({ info, index, selected, onHover, onSelect, texture }: {
  info: (typeof modules)[number];
  index: number;
  selected: boolean;
  onHover: CoreSceneProps["onHover"];
  onSelect: CoreSceneProps["onSelect"];
  texture: THREE.Texture;
}) {
  const surface = useRef<THREE.MeshStandardMaterial>(null);
  const lamp = useRef<THREE.Group>(null);
  const packet = useRef<THREE.Group>(null);
  const trail = useRef<THREE.Mesh>(null);
  const elapsed = useRef(0);
  const { position, color, id } = info;
  const curve = useMemo(() => {
    const [x, y, z] = position;
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(x * 0.23, -0.39, z * 0.23),
      new THREE.Vector3(x * 0.53 + z * 0.11, -0.86, z * 0.53 - x * 0.11),
      new THREE.Vector3(x * 0.85, y - 0.33, z * 0.85),
      new THREE.Vector3(x, y - 0.09, z),
    ]);
  }, [position]);
  const path = useMemo(() => curve.getPoints(30), [curve]);

  useFrame((_, delta) => {
    elapsed.current += Math.min(delta, 0.05);
    const time = elapsed.current;
    const progress = (time / drift + 1 - index * 0.22) % 1;
    if (packet.current) {
      curve.getPoint(progress, packet.current.position);
      packet.current.scale.setScalar(selected ? 1.25 : 0.88);
    }
    if (trail.current) {
      curve.getPoint(Math.max(0, progress - 0.075), trail.current.position);
      trail.current.visible = progress > 0.075;
    }
    if (surface.current) {
      const arrival = Math.max(0, (progress - 0.83) / 0.17);
      surface.current.emissiveIntensity = THREE.MathUtils.damp(surface.current.emissiveIntensity,
        (selected ? 0.92 : 0.30) + arrival * 0.48, 5, delta);
    }
    if (lamp.current) lamp.current.rotation.y = time * 0.44 + index;
  });

  const selectModule = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(id);
  };

  return (
    <>
      <Line points={path} color={color} lineWidth={selected ? 1.65 : 0.85}
        transparent opacity={selected ? 0.85 : 0.42} depthWrite={false} />
      <group ref={packet}>
        <Glow texture={texture} color={color} scale={0.59} opacity={0.9} />
        <mesh><sphereGeometry args={[0.041, 10, 8]} /><meshBasicMaterial color="#ccfff1" toneMapped={false} /></mesh>
      </group>
      <mesh ref={trail}>
        <sphereGeometry args={[0.023, 8, 6]} /><meshBasicMaterial color={color} transparent opacity={0.55} />
      </mesh>
      <group position={position}>
        <Glow texture={texture} color={color} scale={selected ? 2.15 : 1.65} opacity={selected ? 0.47 : 0.25} />
        <RoundedBox args={[0.77, 0.77, 0.77]} radius={0.048} smoothness={2}
          onPointerOver={(event) => { event.stopPropagation(); onHover(id); }}
          onPointerOut={() => onHover(null)}
          onClick={selectModule}
        >
          <meshStandardMaterial ref={surface} color="#126457" emissive={color}
            emissiveIntensity={0.30} metalness={0.48} roughness={0.37} />
        </RoundedBox>
        <WireBox size={[0.77, 0.77, 0.77]} color={color} opacity={selected ? 1 : 0.70} />
        <group position={[0, -0.27, 0]}>
          <WireBox size={[0.81, 0.03, 0.81]} color={color} opacity={0.48} />
        </group>
        <group ref={lamp} position={[0, 0.43, 0]}>
          <Glow texture={texture} color={color} scale={0.35} opacity={0.8} />
          <mesh rotation={[0, Math.PI / 4, 0]}>
            <boxGeometry args={[0.12, 0.035, 0.12]} />
            <meshBasicMaterial color="#afffeb" toneMapped={false} />
          </mesh>
        </group>
      </group>
    </>
  );
}

function OrbitalGuides() {
  const guide = useRef<THREE.Group>(null);
  const paths = useMemo(() => [3.36, 4.04, 4.48].map((radius, index) =>
    Array.from({ length: 97 }, (_, point) => {
      const angle = point / 96 * Math.PI * 2;
      return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius * (0.86 + index * 0.03)] as Point;
    }),
  ), []);
  useFrame((_, delta) => { if (guide.current) guide.current.rotation.y += delta * 0.09; });

  return (
    <>
      <group position={[0, -0.53, 0]} rotation={[0.06, -0.25, 0.14]}>
        <Line points={paths[0]} color={teal} lineWidth={1} transparent opacity={0.63} depthWrite={false} />
      </group>
      <group ref={guide} position={[0, -0.80, 0]}>
        <Line points={paths[1]} color={mint} lineWidth={0.85} transparent opacity={0.43}
          dashed dashScale={1} dashSize={0.09} gapSize={0.15} depthWrite={false} />
        <Line points={paths[2]} color={teal} lineWidth={0.75} transparent opacity={0.22} depthWrite={false} />
      </group>
    </>
  );
}

function Atmosphere() {
  const positions = useMemo(() => Float32Array.from(
    Array.from({ length: 26 }, (_, i) => [
      Math.sin(i * 2.4) * (2.2 + i % 4 * 0.72),
      (i % 7 - 2) * 0.45,
      Math.cos(i * 2.7) * (2.4 + i % 5 * 0.52),
    ]).flat(),
  ), []);
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#53deb7" size={0.025} transparent opacity={0.53} depthWrite={false} toneMapped={false} />
    </points>
  );
}

function Stage({ selected, onHover, onSelect, onReady, onFailure }: Omit<CoreSceneProps, "running">) {
  const texture = useMemo(() => glowTexture(), []);
  const reported = useRef(false);
  const gl = useThree((state) => state.gl);
  useEffect(() => () => texture.dispose(), [texture]);
  useEffect(() => {
    const canvas = gl.domElement;
    const handleLoss = (event: Event) => {
      event.preventDefault();
      onFailure();
    };
    canvas.addEventListener("webglcontextlost", handleLoss);
    return () => canvas.removeEventListener("webglcontextlost", handleLoss);
  }, [gl, onFailure]);

  useFrame(({ camera, pointer, size }, delta) => {
    if (camera instanceof THREE.OrthographicCamera) {
      const zoom = Math.min(size.width / 9.6, size.height / 6.55);
      if (camera.zoom !== zoom) {
        camera.zoom = zoom;
        camera.updateProjectionMatrix();
      }
      camera.position.x = THREE.MathUtils.damp(camera.position.x, cameraHome[0] + pointer.x * 0.74, 3.8, delta);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, cameraHome[1] + pointer.y * 0.53, 3.8, delta);
      camera.lookAt(0, -0.16, 0);
    }
    if (!reported.current) {
      reported.current = true;
      queueMicrotask(onReady);
    }
  });

  return (
    <>
      <ambientLight intensity={1.12} />
      <directionalLight color="#baffed" position={[4, 8, 1]} intensity={2.1} />
      <directionalLight color="#1c8ede" position={[-6, 2, -2]} intensity={0.72} />
      <Grid args={[15, 15]} position={[0, -1.40, 0]} cellSize={0.54} cellThickness={0.40}
        cellColor="#20574c" sectionSize={2.16} sectionThickness={0.62}
        sectionColor="#347d6c" fadeDistance={8} fadeStrength={2.2} />
      <Atmosphere />
      <OrbitalGuides />
      <Platform texture={texture} />
      <CoreCube texture={texture} />
      {modules.map((info, index) => (
        <ModuleNode key={info.id} info={info} index={index} selected={selected === info.id}
          texture={texture} onHover={onHover} onSelect={onSelect} />
      ))}
    </>
  );
}

export default function CoreScene({ running, ...stage }: CoreSceneProps) {
  return (
    <Canvas
      orthographic camera={{ position: cameraHome, near: 0.1, far: 60 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.35]} frameloop={running ? "always" : "never"}
      style={{ touchAction: "pan-y" }}
    >
      <Stage {...stage} />
    </Canvas>
  );
}
