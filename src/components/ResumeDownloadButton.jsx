import { useState } from "react";
import { Download, Loader2, CheckCircle2 } from "lucide-react";

export default function ResumeDownloadButton() {
  const [status, setStatus] = useState("idle");
  const pdfHref = `${import.meta.env.BASE_URL}resume.pdf`; 

  const handleClick = () => {

    if (status !== "downloading") {
      setStatus("downloading");

      setTimeout(() => setStatus("done"), 300);
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  return (
    <a
      href={pdfHref}
      download="Lucas_Resume.pdf"
      onClick={handleClick}             
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
