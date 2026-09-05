import React from "react"
import { NavLink } from "react-router-dom"
import {
    CircleHelp,
    Clock3,
    FileText,
    FolderOpen,
    Grid2X2,
    LayoutDashboard,
    Settings,
    Sparkles,
    Zap
} from "lucide-react"

const Sidebar = () => {
    const menuItems = [
        { path: "/", label: "Dashboard", icon: LayoutDashboard },
        { path: "/analysis/new", label: "New Analysis", icon: Sparkles },
        { path: "/history", label: "History", icon: Clock3 },
        { path: "/reports", label: "Reports", icon: FileText, disabled: true },
        { path: "/datasets", label: "Datasets", icon: FolderOpen, disabled: true },
        { path: "/model-hub", label: "Model Hub", icon: Grid2X2, disabled: true }
    ];

    return (
        <aside className=" flex w-62.5 border-r border-white/[0.07] bg-[#030814] flex-col">
            <div className="flex h-23 items-center gap-3 px-7 py-5">
                <div className="relative flex h-11 w-11 items-center justify-center">
                    <div className="absolute h-8 w-8 rotate-[-35deg] rounded-full border-2 border-cyan-400" />
                    <div className="absolute h-10 w-4 rotate-23 rounded-full border border-blue-500" />
                    <Sparkles className="relative h-4 w-4 text-cyan-300" />
                </div>

                <div>
                    <h1 className="text-[19px] font-semibold tracking-wide text-white">SATQUERY AI</h1>
                    <p className="text-[10px] text-slate-400">AI for Earth Intelligence</p>
                </div>
            </div>

            <nav className="space-y-2 px-4">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    if (item.disabled) {
                        return (
                            <div
                                key={item.path}
                                className="flex h-11 w-full cursor-not-allowed items-center gap-4 rounded-lg px-4 text-sm text-slate-600"
                            >
                                <Icon className="h-4.5 w-4.5" />
                                <span>{item.label}</span>
                            </div>
                        )
                    }
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.path === "/"}
                                className={({ isActive }) =>
                                    `group flex h-11 w-full items-center gap-4 rounded-lg px-4 text-sm transition-all ${isActive
                                        ? "border border-blue-500/40 bg-linear-to-r from-blue-500/15 to-purple-500/10 text-cyan-300"
                                        : "text-slate-400 hover:bg-white/3 hover:text-white"
                                    }`
                                }
                            >
                                <Icon className="h-4.5 w-4.5" />
                                <span>{item.label}</span>
                            </NavLink>
                        );
                    })}
            </nav>

            <div className="mx-5 my-6 border-t border-white/6" />

            <nav className="space-y-2 px-4">
                <button className="cursor-not-allowed group flex h-11 w-full items-center gap-4 rounded-lg px-4 text-sm text-slate-400 transition hover:bg-white/3 hover:text-white">
                    <Settings className="h-4.5 w-4.5" />
                    <span>Settings</span>
                </button>

                <button className="cursor-not-allowed group flex h-11 w-full items-center gap-4 rounded-lg px-4 text-sm text-slate-400 transition hover:bg-white/3 hover:text-white">
                    <CircleHelp className="h-4.5 w-4.5" />
                    <span>Help & Support</span>
                </button>
            </nav>
        </aside>
    )
}

export default Sidebar;