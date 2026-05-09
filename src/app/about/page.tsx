import TopNav from "@/app/components/TopNav";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <TopNav />
      <main className="pt-24 pb-28 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 text-center">
            — The Full Story —
          </p>
          <h1 className="text-4xl font-black text-gray-900 mb-16 text-center">
            About Marin
          </h1>

          <div className="space-y-16">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-widest">
                Background
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-widest">
                Philosophy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                velit, sed quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-widest">
                Outside the Code
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus, omnis
                voluptas assumenda est, omnis dolor repellendus.
              </p>
            </section>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/#contact"
              className="inline-block bg-gray-900 text-white text-sm tracking-widest uppercase px-8 py-4 hover:bg-gray-700 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
