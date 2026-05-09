export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 text-center">
          — Who Is This Person —
        </p>
        <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">
          About Marin
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-widest">
              The Developer
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium
              doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo
              inventore veritatis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-widest">
              The Human
            </h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
