import cls from "classnames";
import { ReactNode } from "react";
interface IChildren {
  children?: ReactNode;
}

type IKindFlag = "default" | "success" | "warning" | "error";

interface IPropsFlag extends IChildren {
  icon?: "alert" | "error" | "success";
  kind?: IKindFlag;
  shadow?: "popup" | "basic" | "none";
  size?: "sm" | "lg" | "full" | "xl";
  customWidth?: string;
  title?: string;
  showDelete?: boolean;
  description?: JSX.Element | string;
  onClose?: () => void;
}
/**
 * Atom: Flag
 */

function Flag({
  kind = "default",
  icon,
  description,
  title,
  showDelete = true,
  size = "lg",
  customWidth,
  onClose,
  shadow = "basic",
  children,
}: IPropsFlag) {
  const getColorIcon = () => {
    if (kind === "default") return "default";
    if (kind === "success") return "success";
    if (kind === "warning") return "warning";
    if (kind === "error") return "critical";
    return "default";
  };

  const getColorContainer = cls(
    {
      "max-w-[420px]": size === "lg" && !customWidth,
      "max-w-[288px]": size === "sm" && !customWidth,
      "w-1/3 min-w-[200px]": size === "xl" && !customWidth,
      "bg-surface-default": kind === "default",
      "bg-surface-success-subdued": kind === "success",
      "bg-surface-warning-subdued": kind === "warning",
      "bg-surface-critical-subdued": kind === "error",
    },
    customWidth
  );

  return (
    <div
      role="alert"
      className={cls(
        "w-full p-sm flex justify-between gap-x-sm rounded-sm",
        getColorContainer,
        {
          "shadow-[0px_3px_22px_0px_#34343433]": shadow === "popup",
          "shadow-[0px_0px_3px_0px_#34343426]": shadow === "basic",
        }
      )}
    >
      {icon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      ) : null}

      <div className="flex-1 w-[calc(100%-4rem)]">
        {title ? (
          <p color="default" className={cls(description ? "mb-sm" : "")}>
            {title}
          </p>
        ) : null}

        {description ? (
          <p color="default" className={cls(children ? "mb-sm" : "")}>
            {description}
          </p>
        ) : null}

        {children}
      </div>

      {showDelete && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      )}
    </div>
  );
}

export default Flag;
