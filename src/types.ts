import { ApplicationCommandData, CommandInteraction } from 'discord.js'

export type Command = ApplicationCommandData & {
    execute: (interaction: CommandInteraction) => Promise<any>
}
export interface StateInterface {
    enabled: boolean
    CHANNEL_ID: string
    GUILD_ID: string
    timetable: {
        [key: string]: string[]
    }
}
