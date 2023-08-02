interface IButton {
  onClick: () => void
  text: string
}
export default function Button({
  onClick,
  text
}: IButton): JSX.Element {
  return(
    <button className="border-2 p-2 rounded-md hover:bg-gray-400" onClick={onClick}>{text}</button>
  )
}
