import Link from "next/link";
import TypewriterTitle from "@/components/typewriter-title";

const focusAreas = [
  "Linux",
  "Containers",
  "Kubernetes",
  "CI/CD",
  "Automation",
  "Platform Engineering",
];

const projects = [
  {
    name: "Mini Platform",
    status: "持续开发中",
    description:
      "一个配置驱动的个人开发者平台，用统一的 Dashboard 管理本地开发服务，并逐步向容器和 Kubernetes 工作流演进。",
    highlights: [
      "基于 YAML 定义服务",
      "服务状态建模",
      "模拟启动和停止操作",
      "自动化测试",
    ],
    techStack: ["Python", "FastAPI", "Jinja2", "YAML", "Pytest"],
    github: "https://github.com/mark-dudu/mini-platform",
  },
  {
    name: "Personal Blog",
    status: "持续开发中",
    description:
      "一个用于写作、项目展示和长期记录的个人网站，主要用于沉淀技术学习、项目进展、读书笔记和个人反思。",
    highlights: [
      "静态与动态路由",
      "项目展示",
      "技术与个人写作",
      "长期个人内容归档",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mark-dudu/my-blog",
  },
];

const writingCategories = [
  "技术笔记",
  "项目记录",
  "读书笔记",
  "个人反思",
  "职业成长",
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-16 sm:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Platform Engineering · DevOps · SRE
        </p>

        <TypewriterTitle />

        <p className="mt-6 text-xl leading-8 text-zinc-700">
          我曾从事测试工程工作，目前正在系统补齐 Linux、Containers、
          Kubernetes、Automation 和 Platform Engineering 相关能力。
        </p>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-600">
          这里既是我的项目展示入口，也是长期写作和记录的地方。我会在这里整理
          技术学习、项目实践、职业转型、读书笔记、个人反思以及长期成长过程。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            查看项目
          </a>

          <Link
            href="/blog"
            className="rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-100"
          >
            阅读文章
          </Link>

          <Link
            href="/about"
            className="px-5 py-3 text-sm font-medium text-zinc-700 hover:text-zinc-950"
          >
            关于我
          </Link>

          <a
            href="https://github.com/mark-dudu"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 text-sm font-medium text-zinc-700 hover:text-zinc-950"
          >
            GitHub
          </a>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          当前方向
        </h2>

        <p className="mt-2 max-w-2xl text-zinc-600">
          当前主要围绕平台工程、基础设施自动化和云原生技术进行学习与实践。
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="mt-20 scroll-mt-12">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            重点项目
          </h2>

          <p className="mt-2 max-w-2xl text-zinc-600">
            这些项目用于记录我的工程实践、技术决策和持续学习过程。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-xl border border-zinc-200 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-zinc-900">
                  {project.name}
                </h3>

                <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                  {project.status}
                </span>
              </div>

              <p className="mt-4 leading-7 text-zinc-600">
                {project.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-zinc-900">
                  当前能力
                </h4>

                <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span aria-hidden="true">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-zinc-900">
                  技术栈
                </h4>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-zinc-900 hover:underline"
                >
                  在 GitHub 查看项目 →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20 border-t border-zinc-200 pt-12">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
          写作
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
          这里会收录技术笔记、项目记录、读书笔记、个人反思，以及对职业和长期成长的思考。
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {writingCategories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700"
            >
              {category}
            </span>
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-8 inline-block text-sm font-semibold text-zinc-900 hover:underline"
        >
          查看全部文章 →
        </Link>
      </section>
    </main>
  );
}