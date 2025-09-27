import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-slate-400 border-t border-slate-800 mt-10">
      © {new Date().getFullYear()} Anjali Patel. All rights reserved.
    </footer>
  );
}

