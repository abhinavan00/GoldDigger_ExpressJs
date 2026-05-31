import path, { join } from 'node:path'
import fs from 'node:fs/promises'

export async function addNewInvestment(data) {
    const stringData = Object.entries(data).map(([key, val]) => {
        return `${key}: ${val}`
    }).join(', ')

    const filePath = path.join('data', 'purchaseHistory.txt')

    try{
        await fs.appendFile(filePath, `${stringData}\n`, 'utf8')

    } catch(err) {
        throw new Error(`Unable to add make purchase at the moment: ${err}`)
    }
}