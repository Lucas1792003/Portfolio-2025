import { useState } from "react";
import { Download, Loader2, CheckCircle2 } from "lucide-react";

export default function ResumeDownloadButton() {
  const [status, setStatus] = useState("idle");
  // works in dev & prod because your vite.config base is '/Portfolio-2025/'
  const pdfHref = `${import.meta.env.BASE_URL}resume.pdf`; // e.g. /Portfolio-2025/resume.pdf

  const handleClick = () => {
    // purely UI state; let the browser handle the download natively
    if (status !== "downloading") {
      setStatus("downloading");
      // quickly flip to 'done' so the UI feels responsive
      setTimeout(() => setStatus("done"), 300);
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <a
      href={pdfHref}
      download="Lucas_Resume.pdf"
      onClick={handleClick}              // no preventDefault!
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 disabled:opacity-60"
      role="button"
    >
      {status === "downloading" ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Downloading…
        </>
      ) : status === "done" ? (
        <>
          <CheckCircle2 className="h-4 w-4" />
          Done
        </>
      ) : (
        <>
          <Download className="h-4 w-4" />
          Download Resume
        </>
      )}
    </a>
  );
}
