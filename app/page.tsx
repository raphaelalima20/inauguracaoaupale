import Image from "next/image";
import WhatsAppButton from "./whatsapp-button";

export default function Home() {
  return (
    <main className="page">
      <Image
        src="/salao.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="bg"
      />
      <div className="overlay" aria-hidden="true" />
      <div className="topline" aria-hidden="true" />

      <section className="content">
        <Image
          src="/logo.png"
          alt="AUPALE"
          width={100}
          height={100}
          priority
          className="logo anim anim-down"
        />

        <div className="divider anim anim-fade" aria-hidden="true">
          <span />
        </div>

        <div className="copy anim anim-up">
          <h1>
            Oii! Que bom que você{" "}
            <span className="nowrap">
              veio! <span className="heart">🤍</span>
            </span>
          </h1>
          <p>
            Nós da equipe <strong>AUPALE</strong> temos um convite especial para
            você!
          </p>
          <p>
            Estamos inaugurando este <strong>sábado (03/10) às 9h</strong> com
            condições especiais e presentes exclusivos para nossas convidadas.
          </p>
          <p>
            Para saber e participar de tudo, entre no nosso{" "}
            <strong>grupo VIP</strong>:
          </p>
        </div>

        <div className="anim anim-up anim-late">
          <WhatsAppButton />
        </div>
      </section>

      <footer className="address anim anim-fade anim-last">
        Rua Dom Pedro II, 2384 — Centro, Porto Velho/RO
      </footer>
    </main>
  );
}
