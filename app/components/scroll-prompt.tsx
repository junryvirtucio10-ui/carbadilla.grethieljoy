type ScrollPromptProps = {
  href: `#${string}`;
  label: string;
};

export function ScrollPrompt({ href, label }: ScrollPromptProps) {
  return (
    <a className="scroll-prompt" href={href}>
      <span>{label}</span>
      <i aria-hidden="true">↓</i>
    </a>
  );
}
