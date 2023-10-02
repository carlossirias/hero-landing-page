import { CheckIcon } from "./icons"

export function Requirements({children})
{
    return(
        <span className="flex items-center gap-2">
            <CheckIcon/>
            <span className="poppins text-sm font-medium text-[#6a738e]">
                {children}
            </span>
        </span>
    )
}