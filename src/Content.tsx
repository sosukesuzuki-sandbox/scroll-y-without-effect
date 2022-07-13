let text: string | null = null;

async function fetchContent(): Promise<string> {
  const res = await fetch(
    "https://raw.githubusercontent.com/tc39/proposals/main/finished-proposals.md"
  );
  const text = await res.text();
  return text;
}

function Content() {
  if (text) {
    return <div>{text}</div>;
  }
  throw fetchContent().then((res) => {
    text = res;
  });
}

export default Content;
