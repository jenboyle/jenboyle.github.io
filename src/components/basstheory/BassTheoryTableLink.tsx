interface BassTheoryTableLinkProps {
  handleNavTheory: (key: string, context: string) => void;
  chord: string;
  children: React.ReactNode;
}

function BassTheoryTableLink({
  handleNavTheory,
  chord,
  children,
}: BassTheoryTableLinkProps) {
  return (
    <a onClick={() => handleNavTheory(`fret_${children}`.toLowerCase(), chord)}>
      {children}
    </a>
  );
}

export default BassTheoryTableLink;
