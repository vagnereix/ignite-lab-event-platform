import { Rocketseat } from "./Rocketseat"

export function Footer() {
  return (
    <footer className="pt-5 flex items-center justify-between border-t border-gray-600">
      <div className="flex items-center gap-5">
        <Rocketseat />
        <span className="text-gray-300">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <span className="text-gray-300">Políticas de privacidade</span>
    </footer>
  )
}
