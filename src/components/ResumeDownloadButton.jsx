import { useState } from "react";
import { Download, Loader2, CheckCircle2 } from "lucide-react";

export default function ResumeDownloadButton() {
  const [status, setStatus] = useState("idle");

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();          
    if (status === "downloading") return;

    setStatus("downloading");
    try {
      const url = `${import.meta.env.BASE_URL}resume.pdf`;
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("File not found");

      const blob = await res.blob();
      const dlUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = dlUrl;
      a.download = "Lucas_Resume.pdf"; // rename on save
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(dlUrl);

      setStatus("done");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      console.error(err);
      alert("Resume not found on the site. Make sure /public/resume.pdf exists.");
      setStatus("idle");
    }
  };

  return (
    <button
      type="button"                
      onClick={handleDownload}
      disabled={status === "downloading"}
      aria-busy={status === "downloading"}
      className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
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
    </button>
  );
}
