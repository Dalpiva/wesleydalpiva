import { uiCopy } from "@/constants/l10n"
import { createOpenGraphImage, ogSize } from "@/app/lib/og"

export const alt = uiCopy["pt-BR"].profileImageAlt
export const size = ogSize
export const contentType = "image/png"

export default createOpenGraphImage("pt-BR")
