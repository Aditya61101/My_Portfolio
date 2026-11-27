"use client";

import { useState } from "react";
import { Icon } from "./icon";

export function CopyEmail({ address }: { address: string }) {
  const [feedback, setFeedback] = useState<"copied" | "unavailable">();

  async function copy() {
    try {
      await navigator.clipboard.writeText(address);
      setFeedback("copied");
    } catch {
      setFeedback("unavailable");
    }
  }

  return (
    <div className="contact__copy">
      <button type="button" className="button button--outline" onClick={copy}>
        <Icon name="copy" /> Copy email
      </button>
      <span className="contact__feedback" role="status">
        {feedback === "copied" ? "Email address copied." : null}
        {feedback === "unavailable" ? <>Copy is unavailable. <span>{address}</span></> : null}
      </span>
    </div>
  );
}
