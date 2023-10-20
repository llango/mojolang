import { defaultTheme, defineUserConfig } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { feedPlugin } from 'vuepress-plugin-feed2';
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { gitPlugin } from '@vuepress/plugin-git'
import { readFileSync } from "fs"
import codeCopyPlugin from '@snippetors/vuepress-plugin-code-copy'
import { commentPlugin } from "vuepress-plugin-comment2";
import { addViteSsrNoExternal } from 'vuepress-shared';

const compareDate = (dateA, dateB) => {
    if (!dateA || !(dateA instanceof Date)) return 1;
    if (!dateB || !(dateB instanceof Date)) return -1;

    return dateB.getTime() - dateA.getTime();
};

const mojoGrammar = JSON.parse(readFileSync("./syntax/mojo.tmLanguage.json").toString())


export default defineUserConfig({
    extendsBundlerOptions: (config, app) => {
        addViteSsrNoExternal(config, app, 'vuepress-shared');
    },
    lang: 'en-US',
    title: 'Mojo语言',
    description: 'Mojo 🔥学习资源',
    pagePatterns: ['**/*.md', '!**/README.md', '!.vuepress', '!node_modules', '!wip'],
    markdown: {
        code: {
            lineNumbers: false
        }
    },
    theme: defaultTheme({
        colorMode: 'light',
        logo: '/hero.png',
        repo: 'mojodojodev/mojodojo.dev',
        repoLabel: 'GitHub',
        docsRepo: 'mojodojodev/mojodojo.dev',
        docsBranch: 'main',
        lastUpdated: false,
        locales: {
            '/': {
                selectLanguageName: 'English',
                editLinkText: '在GitHub编辑该页',
                navbar: [
                    { text: '向导', link: '/guides/' },
                    { text: 'Mojo团队问答', link: '/mojo-team-answers' },
                    { text: 'Mojo周报', link: '/this-week-in-mojo/' },
                    { text: '博客', link: '/blog/' },
                    { text: '项目', link: '/projects/' },
                    { text: 'Mojo适合我吗?', link: '/is-mojo-for-me' },
                ],
                sidebar: [
                    {
                        text: '想到',
                        link: '/guides/',
                        collapsible: true,
                        children: [
                            {
                                text: "介绍Mojo",
                                collapsible: true,
                                children: [
                                    "/guides/intro-to-mojo/setup",
                                    "/guides/intro-to-mojo/basic-types",
                                ],
                            },
                            {
                                text: "General",
                                collapsible: true,
                                children: [
                                    '/guides/general/mojo-playground-vscode.md',
                                ]
                            },
                            {
                                text: "装饰器",
                                collapsible: true,
                                children: [
                                    '/guides/decorators/value.md',
                                    '/guides/decorators/register_passable.md',
                                    '/guides/decorators/parameter.md',
                                    '/guides/decorators/always_inline.md',
                                    '/guides/decorators/noncapturing.md',
                                ]
                            },
                            {
                                text: '标准库',
                                collapsible: true,
                                children: [
                                    '/guides/std/Assert.md',
                                    '/guides/std/Benchmark.md',
                                    {
                                        text: 'Buffer',
                                        collapsible: true,
                                        children: [
                                            '/guides/std/Buffer/Buffer.md',
                                            '/guides/std/Buffer/NDBuffer.md',
                                        ]
                                    },
                                    {
                                        text: 'Pointer',
                                        collapsible: true,
                                        children: [
                                            '/guides/std/Pointer/DTypePointer.md',
                                            '/guides/std/Pointer/Pointer.md',
                                        ]
                                    },
                                    '/guides/std/Random.md',
                                    '/guides/std/Sort.md',
                                    '/guides/std/String.md',
                                    '/guides/std/TargetInfo.md',
                                    '/guides/std/Time.md',
                                    {
                                        text: 'Vector',
                                        collapsible: true,
                                        children: [
                                            '/guides/std/Vector/DynamicVector.md',
                                            '/guides/std/Vector/InlinedFixedVector.md',
                                            '/guides/std/Vector/UnsafeFixedVector.md',
                                        ]
                                    },
                                ]
                            },
                            {
                                text: 'Builtins',
                                collapsible: true,
                                children: [
                                    '/guides/builtins/Bool.md',
                                    '/guides/builtins/BuiltinList.md',
                                    '/guides/builtins/BuiltinSlice.md',
                                    '/guides/builtins/Error.md',
                                    '/guides/builtins/FloatLiteral.md',
                                    '/guides/builtins/StringLiteral.md',
                                    '/guides/builtins/StringRef.md',
                                    '/guides/builtins/Tuple.md',
                                ]
                            },
                            {
                                text: "Benchmarks",
                                collapsible: true,
                                children: [
                                    '/guides/benchmarks/sudoku.md',
                                ]
                            },
                        ],
                    },
                    "/mojo-team-answers.md",
                    {
                        text: 'Mojo周报',
                        link: '/this-week-in-mojo/',
                        collapsible: true,
                        children: [
                            '/this-week-in-mojo/2023-08-18.md',
                            '/this-week-in-mojo/2023-08-11.md',
                            '/this-week-in-mojo/2023-08-04.md',
                            '/this-week-in-mojo/2023-07-28.md',
                            '/this-week-in-mojo/2023-07-21.md',
                            '/this-week-in-mojo/2023-07-14.md',
                            '/this-week-in-mojo/2023-07-07.md',
                            '/this-week-in-mojo/2023-06-30.md',
                            '/this-week-in-mojo/2023-06-23.md',
                            '/this-week-in-mojo/2023-06-16.md',
                            '/this-week-in-mojo/2023-06-09.md',
                            '/this-week-in-mojo/2023-06-02.md',
                            '/this-week-in-mojo/2023-05-26.md',
                            '/this-week-in-mojo/2023-05-19.md',
                            '/this-week-in-mojo/2023-05-12.md',
                        ]
                    },
                    {
                        text: '博客',
                        link: '/blog/',
                        collapsible: true,
                        children: [
                            '/blog/2023-07-17-rust-or-mojo-ai.md',
                            '/blog/2023-05-22-mojo-first-impressions.md',
                            '/blog/2023-05-08-why-use-mojo.md',
                        ]
                    },
                    {
                        text: '项目',
                        link: '/projects/',
                        collapsible: true,
                        children: [
                            '/projects/2023-07-17-rust-or-mojo-ai.md',
                            '/projects/2023-05-22-mojo-first-impressions.md',
                            '/projects/2023-05-08-why-use-mojo.md',
                        ]
                    },
                    "/is-mojo-for-me.md",
                ],
            }
        }
    }),
    plugins: [
        gitPlugin({
            contributors: false
        }),
        commentPlugin({
            provider: "Giscus",
            repo: "mojodojodev/mojodojo.dev",
            repoId: "R_kgDOJfLZPA",
            category: "Comments",
            categoryId: "DIC_kwDOJfLZPM4CXrxB",
            darkTheme: 'dark_dimmed',
            lightTheme: 'dark_dimmed',
        }),
        codeCopyPlugin(),
        docsearchPlugin({
            appId: 'WHF26ZE58I',
            indexName: 'mojodojo',
            apiKey: 'd0eba3511025ee492b32890fdd60cdf3',
        }),
        googleAnalyticsPlugin({
            id: 'G-8B385M142M',
        }),
        shikiPlugin({
            langs: [
                {
                    id: "mojo",
                    scopeName: 'source.mojo',
                    grammar: mojoGrammar,
                    aliases: ["Mojo"],
                },
                {
                    id: "python",
                    scopeName: 'source.python',
                    path: "./languages/python.tmLanguage.json",
                    aliases: ["Python"]
                },
                {
                    id: "output",
                    scopeName: 'source.python',
                    path: "./languages/python.tmLanguage.json",
                    aliases: ["Output"]
                },
                {
                    id: "shell",
                    scopeName: 'source.shell',
                    path: "./languages/shellscript.tmLanguage.json",
                    aliases: ["bash", "Bash"]
                },
            ],
            theme: 'material-default',
        }),
        feedPlugin({
            rss: true,
            json: true,
            atom: true,
            count: 30,

            hostname: 'https://www.mojodojo.dev',
            filter: ({ frontmatter }) => {
                return (
                    frontmatter.feed === true
                );
            },
            sorter: (a, b) => {
                return compareDate(
                    a.data.git?.createdTime
                        ? new Date(a.data.git?.createdTime)
                        : a.frontmatter.date,
                    b.data.git?.createdTime
                        ? new Date(b.data.git?.createdTime)
                        : b.frontmatter.date
                );
            },
        }),

    ],
    onPrepared: async (app) => {
        await app.writeTemp(
            'pages.js',
            `export default ${JSON.stringify(app.pages.map(({ data }) => data))}`
        );
    },
});
