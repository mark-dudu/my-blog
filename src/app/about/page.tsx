import Link from "next/link";

export default function About() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16 sm:px-8">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Background · Work · Growth
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          关于我
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600">
          你好，我是 Mark。一名正在重新建立软件工程能力，并向 Platform
          Engineering、DevOps 和 SRE 方向发展的工程师。
        </p>
      </header>

      <section className="mt-14 space-y-12">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            我的经历
          </h2>

          <div className="mt-4 space-y-4 leading-8 text-zinc-600">
            <p>
              我曾从事电气工程和软件测试工作。在测试工程岗位中，我接触过
              CI 自动化测试、问题分析以及 Kubernetes 测试环境。
            </p>

            <p>
              这些经历让我逐渐对软件系统背后的运行机制、自动化流程和基础设施产生兴趣，
              也促使我开始系统学习 Linux、Containers、Kubernetes、CI/CD
              和平台工程相关知识。
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            我正在做什么
          </h2>

          <div className="mt-4 space-y-4 leading-8 text-zinc-600">
            <p>
              目前，我通过实际项目重新建立工程能力。Mini Platform
              是当前的主要工程项目，用于实践配置驱动设计、服务状态建模、
              API 开发、自动化测试，以及未来的容器和 Kubernetes 集成。
            </p>

            <p>
              我也在持续整理自己的学习过程，希望把零散的技术经验逐步转化为
              更系统、可验证的工程能力。
            </p>
          </div>

          <Link
            href="/#projects"
            className="mt-6 inline-block text-sm font-semibold text-zinc-900 hover:underline"
          >
            查看我的项目 →
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            关于这个网站
          </h2>

          <div className="mt-4 space-y-4 leading-8 text-zinc-600">
            <p>
              这个网站既是我的项目展示入口，也是长期写作和记录的地方。
            </p>

            <p>
              我会在这里记录技术学习、项目实践、职业成长、读书笔记、个人反思，
              以及生活中值得长期保留的思考。
            </p>
          </div>

          <Link
            href="/blog"
            className="mt-6 inline-block text-sm font-semibold text-zinc-900 hover:underline"
          >
            阅读我的文章 →
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            当前方向
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Linux",
              "Containers",
              "Kubernetes",
              "CI/CD",
              "Automation",
              "Platform Engineering",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <nav className="mt-16 border-t border-zinc-200 pt-8">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-700 hover:text-zinc-950"
        >
          ← 返回首页
        </Link>
      </nav>
    </main>
  );
}