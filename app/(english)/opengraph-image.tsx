import { uiCopy } from "@/constants/l10n"
import { createOpenGraphImage, ogSize } from "@/app/lib/og"

export const alt = uiCopy.en.profileImageAlt
export const size = ogSize
export const contentType = "image/png"

export default createOpenGraphImage("en")
