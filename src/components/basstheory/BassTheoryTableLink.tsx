interface BassTheoryTableLinkProps {
  handleNavTheory: (key: string, context: string) => void;
  chord: string;
  children: React.ReactNode;
  specifyfile?: string;
}

function BassTheoryTableLink({
  handleNavTheory,
  chord,
  specifyfile = "",
  children,
}: BassTheoryTableLinkProps) {
  return specifyfile.length > 0 ? (
    <a onClick={() => handleNavTheory(specifyfile, chord)}>{children}</a>
  ) : (
    <a onClick={() => handleNavTheory(`fret_${children}`.toLowerCase(), chord)}>
      {children}
    </a>
  );
}

export default BassTheoryTableLink;
