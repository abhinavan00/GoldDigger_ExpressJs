import sanitize from "sanitize-html"

export function sanitizeJSONBody(data) {
    const cleanBody = Object.fromEntries(
        Object.entries(data).map(([key, val]) => {
            return [key, sanitize(val, {allowedTags: [], allowedAttributes: {}})]
        })
    )

    return cleanBody;
}