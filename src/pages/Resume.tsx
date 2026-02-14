import React, { useState, useEffect } from "react";
import { AlertCircle, Mail } from "lucide-react";
import { EMAIL } from "@/constants";

const ResumeViewer: React.FC = () => {
  const [loadError, setLoadError] = useState(false);
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);
  const src = `${import.meta.env.BASE_URL}resume.pdf`;

  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((res) => setPdfExists(res.ok))
      .catch(() => setPdfExists(false));
  }, [src]);

  if (pdfExists === false) {
    return (
      <section className="min-h-screen py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="section-title text-center mb-6">Resume</h1>
          <div className="neobrutalist-card p-8 md:p-12 flex flex-col items-center justify-center gap-6 text-center min-h-[50vh]">
            <AlertCircle size={48} className="text-destructive" />
            <h3 className="text-xl font-bold text-foreground">Resume not available here</h3>
            <p className="text-foreground/80 max-w-md">
              A PDF resume is not currently hosted. You can request a copy by email.
            </p>
            <a
              href={`mailto:${EMAIL}?subject=Resume request`}
              className="neobrutalist-button neobrutalist-button-primary px-6 py-3 text-sm inline-flex items-center gap-2"
            >
              <Mail size={18} />
              <span className="relative z-10">Request via email</span>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="section-title text-center mb-6">Resume</h1>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="neobrutalist-button neobrutalist-button-primary px-6 py-3 text-sm"
          >
            <span className="relative z-10">Open PDF</span>
          </a>
          <a
            href={src}
            download
            className="neobrutalist-button neobrutalist-button-secondary px-6 py-3 text-sm"
          >
            <span className="relative z-10">Download PDF</span>
          </a>
        </div>

        <div className="neobrutalist-card p-0 relative">
          {loadError ? (
            <div className="w-full h-[85vh] flex flex-col items-center justify-center gap-4 p-8 text-center">
              <AlertCircle size={48} className="text-destructive" />
              <h3 className="text-xl font-bold">Failed to Load Resume</h3>
              <p className="text-foreground/80">
                The PDF viewer couldn't load the resume. Please try downloading it using the button above.
              </p>
              <a href={`mailto:${EMAIL}?subject=Resume request`} className="text-primary underline">
                Or request a copy via email
              </a>
            </div>
          ) : (
            <iframe
              title="Resume"
              src={src}
              className="w-full h-[85vh]"
              onError={() => setLoadError(true)}
            >
              <p className="p-4">
                Your browser does not support PDFs.{" "}
                <a href={src} className="text-primary underline">Download the PDF</a> to view it.
              </p>
            </iframe>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeViewer;
