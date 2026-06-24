import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Política de Privacidade da Via Pet. Saiba como tratamos seus dados pessoais em conformidade com a LGPD.",
  alternates: {
    canonical: "https://viapet.net/politica-de-privacidade",
  },
};

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#3CBDAF]/10 via-white to-[#3CBDAF]/5 py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-500 text-sm">Última atualização: 2026</p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Introdução
              </h2>
              <p>
                A Via Pet valoriza a privacidade de seus clientes e visitantes.
                Esta Política de Privacidade descreve como coletamos, usamos,
                armazenamos e protegemos suas informações pessoais, em
                conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei
                nº 13.709/2018).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. Dados Coletados
              </h2>
              <p>
                Podemos coletar as seguintes informações quando você entra em
                contato conosco através do formulário do site ou WhatsApp:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Nome completo</li>
                <li>Número de telefone/WhatsApp</li>
                <li>Endereço de e-mail</li>
                <li>Mensagens e dúvidas enviadas</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Finalidade do Tratamento
              </h2>
              <p>Seus dados são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Responder suas solicitações de contato e orçamento</li>
                <li>Processar pedidos realizados via WhatsApp</li>
                <li>Enviar informações sobre produtos e serviços solicitados</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. Compartilhamento de Dados
              </h2>
              <p>
                A Via Pet não vende, aluga ou compartilha suas informações
                pessoais com terceiros, exceto quando necessário para:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Cumprimento de obrigações legais ou ordens judiciais</li>
                <li>
                  Prestadores de serviço essenciais (ex: processadores de
                  pagamento), sempre sob cláusulas de confidencialidade
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Armazenamento e Segurança
              </h2>
              <p>
                Adotamos medidas técnicas e organizacionais para proteger seus
                dados contra acesso não autorizado, perda ou alteração. Seus
                dados são armazenados apenas pelo tempo necessário para cumprir
                as finalidades descritas nesta política ou conforme exigido por
                lei.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                6. Seus Direitos (LGPD)
              </h2>
              <p>
                De acordo com a LGPD, você tem direito a:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Confirmar a existência de tratamento de seus dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a eliminação de seus dados</li>
                <li>Revogar seu consentimento a qualquer momento</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                7. Cookies
              </h2>
              <p>
                Nosso site pode utilizar cookies estritamente necessários para
                o funcionamento adequado da navegação. Não utilizamos cookies de
                rastreamento ou publicidade. Você pode gerenciar as
                configurações de cookies através do seu navegador.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                8. Contato do Encarregado de Dados (DPO)
              </h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta
                política, entre em contato:
              </p>
              <p className="mt-2">
                E-mail: contato@viapet.com.br
                <br />
                WhatsApp: (62) 9 9290-5701
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                9. Alterações nesta Política
              </h2>
              <p>
                Esta Política de Privacidade pode ser atualizada periodicamente.
                Recomendamos que você a revise regularmente. A data da última
                atualização estará sempre indicada no topo desta página.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}