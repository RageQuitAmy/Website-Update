import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import type { ReactNode } from "react";

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout>
            <div className="container bg-red-500 dark:bg-blue-400">
                {siteConfig.title}
            </div>
        </Layout>
    );
}
