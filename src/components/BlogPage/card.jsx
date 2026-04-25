// card.jsx
function Card({ className = "", ...props }) {
  return (
    <div
      className={`flex flex-col gap-6 rounded-xl border bg-white/5 text-white ${className}`}
      {...props}
    />
  );
}

function CardHeader({ className = "", ...props }) {
  return (
    <div
      className={`flex flex-col gap-1.5 px-6 pt-6 ${className}`}
      {...props}
    />
  );
}

function CardTitle({ className = "", ...props }) {
  return (
    <h4
      className={`leading-none ${className}`}
      {...props}
    />
  );
}

function CardDescription({ className = "", ...props }) {
  return (
    <p
      className={`text-gray-400 ${className}`}
      {...props}
    />
  );
}

function CardAction({ className = "", ...props }) {
  return (
    <div
      className={`self-start justify-self-end ${className}`}
      {...props}
    />
  );
}

function CardContent({ className = "", ...props }) {
  return (
    <div
      className={`px-6 pb-6 ${className}`}
      {...props}
    />
  );
}

function CardFooter({ className = "", ...props }) {
  return (
    <div
      className={`flex items-center px-6 pb-6 ${className}`}
      {...props}
    />
  );
}

export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent };