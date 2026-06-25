import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Termos de Uso do site Sua Pet. Leia atentamente as condições de uso dos nossos serviços.",
  alternates: {
    canonical: "https://suapet.vercel.app/termos-de-uso",
  },
};

export default function TermosUsoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3CBDAF]/10 via-white to-[#3CBDAF]/5 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Termos de Uso
          </h1>
          <p className="text-gray-500 text-sm">Última atualização: 2026</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e utilizar o site da Sua Pet, você concorda com estes
                Termos de Uso. Caso não concorde com alguma das condições aqui
                estabelecidas, recomendamos que não utilize nossos serviços.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. Descrição do Serviço
              </h2>
              <p>
                O site Sua Pet é uma plataforma institucional e informativa que
                apresenta produtos e serviços para animais de estimação. As
                compras são finalizadas através do WhatsApp, mediante contato
                direto com nossa equipe de atendimento.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Uso do Site
              </h2>
              <p>
                Você concorda em utilizar este site apenas para fins lícitos e
                de acordo com estes Termos de Uso. É proibido:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Utilizar o site de forma que possa danificar, sobrecarregar ou
                  prejudicar nossos sistemas
                </li>
                <li>
                  Tentar acessar áreas restritas sem autorização
                </li>
                <li>
                  Reproduzir, distribuir ou modificar o conteúdo do site sem
                  autorização prévia
                </li>
                <li>
                  Enviar informações falsas ou enganosas através de nossos
                  formulários
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Produtos e Preços
              </h2>
              <p>
                As informações sobre produtos, preços e disponibilidade exibidas
                no site são de caráter informativo. Os preços podem ser
                alterados sem aviso prévio. Para confirmar valores atualizados
                e disponibilidade, entre em contato diretamente pelo WhatsApp ou
                telefone.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo deste site — incluindo textos, imagens, logos,
                ícones e design — é de propriedade da Sua Pet ou de seus
                respectivos licenciadores e está protegido por leis de direitos
                autorais e propriedade intelectual.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Links para Terceiros
              </h2>
              <p>
                Nosso site pode conter links para redes sociais (Facebook,
                Instagram) e WhatsApp. Não nos responsabilizamos pelo conteúdo
                ou práticas de privacidade dessas plataformas de terceiros.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7. Limitação de Responsabilidade
              </h2>
              <p>
                A Sua Pet não se responsabiliza por:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Eventuais indisponibilidades temporárias do site devido a
                  manutenções ou problemas técnicos
                </li>
                <li>
                  Informações desatualizadas sobre produtos, desde que não haja
                  má-fé
                </li>
                <li>
                  Danos indiretos decorrentes do uso ou impossibilidade de uso
                  do site
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                8. Alterações nos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a
                qualquer momento. As alterações entram em vigor imediatamente
                após sua publicação. Recomendamos que você revise esta página
                periodicamente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                9. Contato
              </h2>
              <p>
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato:
              </p>
              <p className="mt-2">
                E-mail: contato@suapet.vercel.app
                <br />
                WhatsApp: (11) 19999-9999
                <br />
                Telefone: (11) 0000-0000
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}