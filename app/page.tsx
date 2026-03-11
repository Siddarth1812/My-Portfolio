import { HeroPhoto } from '@/components/HeroPhoto';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="section-label mb-4">01 / 08</p>
            <h1 className="font-display font-bold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
              <span className="block">SIDDARTH</span>
              <span className="block">USULKAR</span>
            </h1>
            <p className="mt-6 text-white/70 text-sm md:text-base tracking-wide">
              BIOMEDICAL INFORMATICS · CLINICAL RESEARCH · DATA SCIENCE · REAL-WORLD EVIDENCE
            </p>
            <p className="mt-1 text-white/50 text-sm">
              MS-BIDS · ASU · 4.0 GPA
            </p>
          </div>
          <div className="mt-10 lg:mt-0 lg:shrink-0 flex justify-center lg:justify-end">
            <HeroPhoto />
          </div>
        </div>
      </section>

      {/* Biodata */}
      <section id="biodata" className="px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        <p className="section-label">[ BIODATA ]</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-6 tracking-tight">
          SIDDARTH USULKAR
        </h2>
        <div className="p-6 rounded-lg border border-white/10 bg-white/[0.02]">
          <p className="text-white/80 text-sm md:text-base leading-relaxed">
            I am a Biomedical Informatics and Data Science graduate student at Arizona State University, graduating in May 2026 with a 4.0 GPA. I have experience in clinical informatics (CDS, HL7 FHIR, CQL), clinical research coordination, and data analytics. Patent holder and published researcher in pharmaceutics and drug delivery.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-white/70 text-sm">
            <a href="https://linkedin.com/in/siddarthusulkar" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition">LINKEDIN</a>
            <a href="mailto:susulkar@asu.edu" className="underline hover:text-white transition">EMAIL</a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {[
            { label: 'Current Role', value: 'CLINICAL INFORMATICS INTERN' },
            { label: 'Organization', value: 'ARIZONA STATE UNIVERSITY' },
            { label: 'GPA', value: '4.00 / 4.00' },
            { label: 'Experience', value: '4+ YEARS' },
            { label: 'Location', value: 'TEMPE, AZ' },
            { label: 'Status', value: 'OPEN TO WORK' },
          ].map(({ label, value }) => (
            <div key={label} className="p-3 rounded border border-white/10 bg-white/[0.02]">
              <p className="text-white/50 text-xs uppercase tracking-wider">{label}</p>
              <p className="text-white text-sm font-medium mt-1">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        <p className="section-label">[ WORK HISTORY ]</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-10 tracking-tight">
          EXPERIENCE
        </h2>
        <div className="space-y-10">
          {[
            { num: '01', company: 'ARIZONA STATE UNIVERSITY', location: 'Phoenix, AZ', dates: 'May 2025 – July 2025', position: 'Clinical Informatics Intern', bullets: ['Led development of a clinical decision support (CDS) prototype for GLP-1 prescribing (Ozempic, Wegovy) using HL7 FHIR and CQL.', 'Defined patient eligibility using VA guidelines and SME input, applied criteria to synthetic EHR (Synthea) data to identify eligible patients.', 'Presented solution architecture, findings, and live demo to Department of Veterans Affairs stakeholders.'] },
            { num: '02', company: 'DR. POTE\'S MATERNITY HOME', location: 'India', dates: 'September 2023 – July 2024', position: 'Clinical Research Co-ordinator (Part-Time)', bullets: ['Coordinated daily operational activities for investigator-initiated PCOS clinical trial (~30 participants), including visit tracking and follow-ups.', 'Supported informed consent process, AE monitoring, and maintained >95% CRF data accuracy in compliance with ICH-GCP.', 'Maintained study files and regulatory documentation; ensured protocol adherence and data integrity.'] },
            { num: '03', company: 'VINAY COLLEGE OF PHARMACY', location: 'India', dates: 'August 2023 – July 2024', position: 'Assistant Professor', bullets: ['Delivered lectures and hands-on training in Pharmaceutics & Drug Design, Human Anatomy & Physiology and Pharmacology.', 'Mentored student research projects, provided guidance on study design, data analysis, and guided publications to strengthen academic output.', 'Coordinated seminars/workshops and drove interdisciplinary collaborations.'] },
            { num: '04', company: 'PRAGATI PHARMA', location: 'India', dates: 'June 2021 – July 2021', position: 'Formulation & Quality Control Intern', bullets: ['Supported formulation development, conducted quality control testing and stability assessments.', 'Assisted Research and Development in Ayurvedic product initiatives, regulatory documentation and preliminary analyses.'] },
          ].map((job) => (
            <div key={job.num} className="border border-white/10 rounded-lg p-6 bg-white/[0.02]">
              <p className="font-display text-white/40 text-sm mb-3">{job.num}</p>
              <p className="font-display font-semibold text-white text-lg">{job.company}</p>
              <p className="text-white/50 text-sm">{job.location}</p>
              <p className="text-white/60 text-sm mt-1">{job.dates}</p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-3">Position</p>
              <p className="font-semibold text-white mt-1">{job.position}</p>
              <p className="text-white/60 text-xs uppercase tracking-wider mt-4">Key Impact</p>
              <ul className="mt-2 space-y-2 text-white/80 text-sm">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white/50 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        <p className="section-label">[ SELECTED WORK ]</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-10 tracking-tight">
          PROJECTS
        </h2>
        <div className="space-y-10">
          {[
            { num: '01', title: 'Smart Specimen Management', subtitle: 'Clinical Workflow Optimization Prototype', stack: ['Python', 'CQL', 'Clinical Decision Support', 'Synthea'], desc: 'Designed a clinical decision-support module to optimize laboratory specimen collection workflows. Reduced simulated tube utilization by ~25% and validated performance across 50+ test combinations. Real-time processing (<5s) and audit tracking for accuracy and traceability.' },
            { num: '02', title: 'Twitter Sentiment Analysis', subtitle: 'Python, NLP, Machine Learning', stack: ['Python', 'Pandas', 'Scikit-learn', 'Gensim', 'TF-IDF', 'Word2Vec', 'Seaborn'], desc: 'NLP pipeline to classify sentiments in 10,000+ tweets. Implemented TF-IDF and Word2Vec with Random Forest (78% accuracy) and neural networks. Visualized results with Seaborn for stakeholder presentations.' },
            { num: '03', title: 'Predicting Molecular Solubility', subtitle: 'Python and Scikit-learn Regression Models', stack: ['Python', 'Scikit-learn', 'Linear Regression', 'Random Forest', 'Matplotlib'], desc: 'Linear Regression and Random Forest models to predict molecular solubility with high R² scores. Visualized performance (MSE, R²) with Matplotlib for clear reporting.' },
          ].map((proj) => (
            <div key={proj.num} className="border border-white/10 rounded-lg p-6 bg-white/[0.02] hover:border-white/20 transition">
              <p className="font-display text-white/40 text-sm mb-2">{proj.num}</p>
              <p className="font-display font-semibold text-white text-xl">{proj.title}</p>
              <p className="text-white/60 text-sm">{proj.subtitle}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {proj.stack.map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-white/10 text-white/80 text-xs">{s}</span>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-4 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        <p className="section-label">[ TECH STACK ]</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-10 tracking-tight">
          SKILLS
        </h2>
        <div className="space-y-8">
          {[
            { label: 'Clinical Research & Regulatory', tags: ['ICH-GCP', 'Protocol Implementation', 'AE Monitoring', 'CRFs/eCRFs', 'EDC', 'Clinical Documentation', 'Clinical Data Management', 'Regulatory Documentation'] },
            { label: 'Real-World Evidence & Study Design', tags: ['Observational Study Design', 'Comparative Effectiveness', 'Propensity Score Methods', 'Claims & EHR Data', 'Epidemiology'] },
            { label: 'Data Analytics & Programming', tags: ['Python', 'NumPy', 'Pandas', 'R', 'SQL/MySQL', 'Machine Learning', 'NLP', 'Power Bi', 'Tableau'] },
            { label: 'Modeling & Statistical Tools', tags: ['Excel', 'Decision Trees', 'Markov Models', 'Regression', 'Survival Analysis', 'GraphPad Prism', 'Design Expert'] },
            { label: 'Domain Expertise', tags: ['Pharmaceutical Sciences', 'Biomedical Informatics', 'U.S. Healthcare', 'Clinical Research', 'Regulatory & Reimbursement'] },
          ].map((group) => (
            <div key={group.label}>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-md bg-white/10 text-white/90 text-sm border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        <p className="section-label">[ EDUCATION ]</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-10 tracking-tight">
          EDUCATION
        </h2>
        <div className="space-y-6">
          {[
            { years: '2024 – 2026', school: 'Arizona State University', degree: 'Master of Science in Biomedical Informatics and Data Science', gpa: 'GPA: 4.00 / 4.00' },
            { years: '2021 – 2023', school: 'KLE Academy of Higher Education and Research', degree: 'Master of Pharmacy (Pharmaceutics)', gpa: 'GPA: 8.56 / 10' },
            { years: '2017 – 2021', school: 'Rajiv Gandhi University of Health Sciences', degree: 'Bachelor of Pharmacy', gpa: 'GPA: 8.56 / 10' },
          ].map((edu) => (
            <div key={edu.school} className="flex flex-col md:flex-row md:items-baseline gap-2 border-b border-white/10 pb-4">
              <p className="text-white/50 text-sm md:w-28 shrink-0">{edu.years}</p>
              <div>
                <p className="font-semibold text-white">{edu.school}</p>
                <p className="text-white/80 text-sm">{edu.degree}</p>
                <p className="text-white/50 text-sm">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 p-4 rounded border border-white/10 bg-white/[0.02]">
          <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Patent & Research</p>
          <ul className="text-white/80 text-sm space-y-1">
            <li>· Berberine Nanoethosomal Vaginal In-Situ Gel for PCOS (Indian Patent 202341046428 A)</li>
            <li>· Fabrication of Berberine Loaded Ethosomal Gel for Arthritis (Indian Patent 202341055065 A)</li>
            <li>· Usulkar et al. Innovative Berberine Nanoethosomal Vaginal In-Situ Gel (PCOS, Wistar Rats)</li>
          </ul>
          <p className="text-white/50 text-xs uppercase tracking-wider mt-4">Achievements</p>
          <ul className="text-white/80 text-sm mt-1 space-y-1">
            <li>· Best Research Poster Award, ASU College of Health Solutions (2025)</li>
            <li>· Best Researcher Award (Nanotechnology), Innovation Technologists, ScienceFather (2024)</li>
          </ul>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        <p className="section-label">[ CURRICULUM VITAE ]</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-10 tracking-tight">
          RÉSUMÉ
        </h2>
        <div className="border border-white/10 rounded-lg p-6 md:p-8 bg-white/[0.02]">
          <p className="text-white/50 text-xs uppercase tracking-wider mb-2">Document Preview</p>
          <p className="font-display font-bold text-white text-xl mb-4">SIDDARTH USULKAR</p>
          <p className="text-white/50 text-sm mb-4">RESUME.PDF</p>
          <ul className="text-white/80 text-sm space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-white/50">▸</span> MS Biomedical Informatics & Data Science · Arizona State University · GPA 4.0</li>
            <li className="flex gap-2"><span className="text-white/50">▸</span> Clinical Informatics Intern · ASU · 2025</li>
            <li className="flex gap-2"><span className="text-white/50">▸</span> Clinical Research Co-ordinator · Dr. Pote&apos;s Maternity Home · 2023–2024</li>
            <li className="flex gap-2"><span className="text-white/50">▸</span> 3 Selected Projects · Smart Specimen · Sentiment Analysis · Molecular Solubility</li>
          </ul>
          <p className="text-white/50 text-xs">LAST UPDATED · MARCH 2026</p>
          <a href="#contact" className="inline-block mt-4 text-white underline hover:no-underline transition">
            VIEW IN BROWSER ↗
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 lg:px-16 py-20 max-w-4xl">
        <p className="section-label">[ GET IN TOUCH ]</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white mt-2 mb-10 tracking-tight">
          LET&apos;S CONNECT
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-white/80 text-sm">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Email</p>
            <a href="mailto:susulkar@asu.edu" className="text-white hover:underline">susulkar@asu.edu</a>
          </div>
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Phone</p>
            <a href="tel:+16024038151" className="text-white hover:underline">(602) 403 8151</a>
          </div>
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
            <p className="text-white">Tempe, Arizona, USA</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://linkedin.com/in/siddarthusulkar" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white underline text-sm transition">LINKEDIN</a>
          <a href="mailto:susulkar@asu.edu" className="text-white/70 hover:text-white underline text-sm transition">EMAIL</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 lg:px-16 py-8 border-t border-white/10">
        <p className="font-display font-semibold text-white text-sm">SIDDARTH USULKAR © 2026</p>
        <p className="text-white/50 text-sm mt-1">BIOMEDICAL INFORMATICS · TEMPE, AZ · MS-BIDS · ASU · GPA 4.0</p>
      </footer>
    </main>
  );
}
