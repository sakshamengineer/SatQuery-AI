import {
    Layers,
    Activity
} from 'lucide-react'

const OpticalSARResult = (props) => {
    const data = props.result || {}

    const images =
        data.images || []

    const evidence =
        data.evidence || []

    const trace =
        data.trace ||
        data.execution_trace ||
        []

    return (
        <main className='min-w-0 px-4 py-5 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-7xl'>

                <div className='mb-6'>
                    <p className='text-sm text-cyan-400'>
                        MULTI-MODAL ANALYSIS
                    </p>

                    <h1 className='mt-1 text-2xl font-semibold sm:text-3xl'>
                        Optical-SAR Fusion
                    </h1>
                </div>

                <div className='grid gap-5 xl:grid-cols-[1.4fr_0.6fr]'>

                    <section className='space-y-5'>

                        <div className='grid gap-3 md:grid-cols-2'>
                            {images.slice(0, 2).map(
                                (image, index) => (
                                    <div
                                        key={index}
                                        className='overflow-hidden rounded-2xl border border-white/10 bg-black/20'
                                    >
                                        <div className='border-b border-white/5 px-4 py-3 text-xs text-slate-500'>
                                            {index === 0
                                                ? "Optical"
                                                : "SAR"}
                                        </div>

                                        <img
                                            src={image}
                                            alt={
                                                index === 0
                                                    ? "Optical"
                                                    : "SAR"
                                            }
                                            className='h-72 w-full object-contain'
                                        />
                                    </div>
                                )
                            )}
                        </div>

                        {evidence.length > 0 && (
                            <div className='overflow-hidden rounded-2xl border border-white/10 bg-black/20'>
                                <div className='flex items-center gap-2 border-b border-white/5 px-4 py-3'>
                                    <Layers className='h-5 w-5 text-purple-400' />

                                    <span className='text-sm font-medium'>
                                        Fusion Evidence
                                    </span>
                                </div>

                                <div className='grid gap-4 p-4 sm:grid-cols-2'>
                                    {evidence.map(
                                        (item, index) => (
                                            <div
                                                key={index}
                                                className='rounded-xl bg-black/20 p-3'
                                            >
                                                {item.url && (
                                                    <img
                                                        src={item.url}
                                                        alt='Fusion evidence'
                                                        className='max-h-80 w-full rounded-lg object-contain'
                                                    />
                                                )}

                                                <p className='mt-2 text-xs text-slate-500'>
                                                    {item.description ||
                                                        item.type}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        )}

                        <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6'>
                            <h2 className='font-medium'>
                                Fusion Analysis
                            </h2>

                            <p className='mt-4 text-sm leading-7 text-slate-300'>
                                {data.answer ||
                                    "No fusion result returned."}
                            </p>
                        </div>

                    </section>

                    <section className='space-y-5'>

                        <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
                            <p className='text-xs text-slate-500'>
                                Confidence
                            </p>

                            <p className='mt-2 text-2xl font-semibold text-cyan-300'>
                                {Math.round(
                                    (data.confidence ||
                                        0) * 100
                                )}
                                %
                            </p>

                            <p className='mt-5 text-xs text-slate-500'>
                                Sensor
                            </p>

                            <p className='mt-2 text-sm text-white'>
                                {data.sensor ||
                                    "Optical + SAR"}
                            </p>
                        </div>

                        <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
                            <p className='text-xs text-slate-500'>
                                Model
                            </p>

                            <p className='mt-2 text-sm leading-5 text-white'>
                                {data.model ||
                                    "Optical-SAR Fusion"}
                            </p>
                        </div>

                        <div className='rounded-2xl border border-white/10 bg-white/[0.03] p-5'>
                            <div className='flex items-center gap-2'>
                                <Activity className='h-5 w-5 text-emerald-400' />

                                <h2 className='font-medium'>
                                    Execution Trace
                                </h2>
                            </div>

                            <div className='mt-4 space-y-2'>
                                {trace.map(
                                    (item, index) => (
                                        <div
                                            key={index}
                                            className='rounded-lg bg-black/20 p-3 text-xs text-slate-400'
                                        >
                                            {item.step ||
                                                item.name ||
                                                `Step ${index + 1}`}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                    </section>

                </div>
            </div>
        </main>
    )
}

export default OpticalSARResult