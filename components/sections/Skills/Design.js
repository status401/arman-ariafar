export default function Design() {
    return (
        <div className="rounded-lg bg-design shadow-2xl shadow-black/30 dark:shadow-none">
            <div className="grid w-full grid-cols-3 items-start justify-items-center gap-x-4 bg-white/30 px-4 py-8 dark:bg-black/50">
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md backdrop-saturate-150 dark:bg-black/40"
                    dir="ltr"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        Softwares 🗃️
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>Figma</li>
                        <li>A.XD</li>
                        <li>A.Illustrator (A Little)</li>
                        <li>A.Photoshop (A Little)</li>
                    </ul>
                </article>
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md backdrop-saturate-200 dark:bg-black/40"
                    dir="ltr"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        Design Skills 🎨
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>Spacing</li>
                        <li>Typography</li>
                        <li>Selecting fonts</li>
                        <li>Color Theory</li>
                        <li>Color Sense</li>
                        <li>Composition / Layout</li>
                    </ul>
                </article>
                <article
                    className="w-full rounded-lg bg-white/40 p-4 shadow-md backdrop-blur-md dark:bg-black/40"
                    dir="ltr"
                >
                    <h6 className="text-2xl font-thin text-orange-500">
                        Coming Soon... 📸
                    </h6>
                    <ul className="mt-4 text-base font-bold leading-8 text-grey-500/70 dark:text-lightGrey/70">
                        <li>A.Premiere</li>
                        <li>A.AfterEffects</li>
                        <li>Photography</li>
                        <li>etc, (never gonna stop)</li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
