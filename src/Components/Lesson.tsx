import { format, isPast } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
import { CheckCircle, Lock } from "phosphor-react"
import { Link, useParams } from "react-router-dom"

import cx from "classnames"

type LessonProps = {
  title: string
  slug: string
  availableAt: Date
  type: "live" | "class"
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugfromParams } = useParams<{ slug: string }>()
  const isActiveLesson = slug === slugfromParams

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  )

  return (
    <Link
      to={`/event/lesson/${slug}`}
      tabIndex={isLessonAvailable ? 0 : -1}
      className={cx("group", {
        "pointer-events-none opacity-50": !isLessonAvailable,
      })}
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={cx(
          "relative rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            "group-hover:border-green-500": !isActiveLesson,
            "group-hover:border-white bg-green-500 before:absolute before:z-[10] before:w-3 before:h-3 before:top-1/4 before:left-[-6px] before:bg-green-500 before:rotate-45":
              isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={cx("text-sm  font-medium flex items-center gap-2", {
                "text-blue-500": !isActiveLesson,
                "text-white": isActiveLesson,
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={cx(
              "text-xs rounded py-[0.125rem] px-2 text-white border ",
              {
                "border-green-300": !isActiveLesson,
                "border-white": isActiveLesson,
              }
            )}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={cx("mt-5 block", {
            "text-gray-200": !isActiveLesson,
            "text-white": isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
