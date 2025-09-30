import Link from "@docusaurus/Link";
import { ThemeClassNames } from "@docusaurus/theme-common";
import CurseForge from "@site/src/components/icons/curseforge";
import Discord from "@site/src/components/icons/discord";
import GitHub from "@site/src/components/icons/github";
import KoFi from "@site/src/components/icons/kofi";
import Modrinth from "@site/src/components/icons/modrinth";
import LinkItem from "@theme/Footer/LinkItem";
import type { Props } from "@theme/Footer/Links/MultiColumn";
import clsx from "clsx";
import { type ReactNode } from "react";

type ColumnType = Props["columns"][number];
type ColumnItemType = ColumnType["items"][number];

function ColumnLinkItem({ item }: { item: ColumnItemType }) {
    return item.html ? (
        <li
            className={clsx("footer__item", item.className)}
            // Developer provided the HTML, so assume it's safe.
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: item.html }}
        />
    ) : (
        <li key={item.href ?? item.to} className="footer__item">
            <LinkItem item={item} />
        </li>
    );
}

function Column({ column }: { column: ColumnType }) {
    return (
        <div
            className={clsx(
                ThemeClassNames.layout.footer.column,
                "col footer__col",
                column.className
            )}
        >
            <div className="footer__title">{column.title}</div>
            <ul className="footer__items clean-list">
                {column.items.map((item, i) => (
                    <ColumnLinkItem key={i} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default function FooterLinksMultiColumn({ columns }: Props): ReactNode {
    return (
        <div className="row footer__links">
            <div className="theme-layout-footer-column col footer__col flex flex-col items-start gap-6">
                <div>
                    <img
                        src="/img/logo.svg"
                        alt="DAQEM Studios Logo"
                        className="block dark:hidden w-56 h-auto"
                    />
                    <img
                        src="/img/logo-dark.svg"
                        alt="DAQEM Studios Logo"
                        className="hidden dark:block w-56 h-auto"
                    />
                </div>
                <div className="flex gap-4">
                    <Link
                        href="https://daqem.com/discord"
                        className="size-6 flex items-center"
                    >
                        <Discord />
                    </Link>
                    <Link
                        href="https://github.com/DAQEM"
                        className="size-6 flex items-center"
                    >
                        <GitHub />
                    </Link>
                    <Link
                        href="https://curseforge.com/members/daqem"
                        className="size-6 flex items-center"
                    >
                        <CurseForge />
                    </Link>
                    <Link
                        href="https://modrinth.com/organization/daqem-studios"
                        className="size-6 flex items-center"
                    >
                        <Modrinth />
                    </Link>
                    <Link
                        href="https://ko-fi.com/daqem"
                        className="size-6 flex items-center"
                    >
                        <KoFi />
                    </Link>
                </div>
                <div>
                    <p className="m-0">
                        Copyright © {new Date().getFullYear()} DAQEM Studios.
                        All rights reserved.
                    </p>
                </div>
            </div>
            {columns.map((column, i) => (
                <Column key={i} column={column} />
            ))}
        </div>
    );
}
