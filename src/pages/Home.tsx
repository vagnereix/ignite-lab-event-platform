import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Footer } from "../Components/Footer"
import { Logo } from "../Components/Logo"
import { useCreateSubcriberMutation } from "../graphql/generated"

export function Home() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  // useMutation retorna uma função que executa a mutation e os dados retornados por ela em um array
  const [createSubscriber, { data, loading }] = useCreateSubcriberMutation({})

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      },
    })

    navigate("event/")
  }

  return (
    <>
      <div className="relative min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="absolute w-[594px] h-[515px] top-4 bg-react bg-cover" />

        <div className="relative z-[100] w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
          <section className="max-w-[640px]">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] leading-tight">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com
              <strong className="text-blue-500"> React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </section>

          <section className="p-8 bg-gray-700 border border-gray-500 rounded">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full"
            >
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                className="bg-gray-900 px-5 h-14 rounded"
                placeholder="Seu nome completo"
              />
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="bg-gray-900 px-5 h-14 rounded"
                placeholder="Digite seu e-mail"
              />

              <button
                type="submit"
                disabled={loading || name.trim() === "" || email.trim() === ""}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
              >
                {!loading ? (
                  "Garantir minha vaga"
                ) : (
                  <div className="flex-1 grid place-items-center">
                    <main className="w-5 h-5 rounded-full border-2 border-b-0 border-gray-900 animate-spin bg-transparent" />
                  </div>
                )}
              </button>
            </form>
          </section>
        </div>

        <img src="/src/assets/code-mockup.png" alt="Code image" />
      </div>

      <div className="px-4 pb-4 max-w-[1100px] mx-auto">
        <Footer />
      </div>
    </>
  )
}
