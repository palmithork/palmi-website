// Renders an array of short lines separated by <br />, e.g. a list from the translation files.
export default function Lines({ lines }) {
  return (Array.isArray(lines) ? lines : [lines]).map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}
