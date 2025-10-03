import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
    sidebar: [
        {
            type: "doc",
            id: "index",
            label: "Arc Lib",
        },
        {
            type: "category",
            label: "Wiki",
            items: [
                {
                    type: "doc",
                    id: "wiki/actions/index",
                    label: "Actions",
                    customProps: { emoji: "⚡" },
                },
                {
                    type: "category",
                    label: "Action Types",
                    customProps: { emoji: "🎬" },
                    collapsed: true,
                    items: [
                        {
                            type: "category",
                            label: "Advancements",
                            customProps: { emoji: "🏆" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/action_types/advancements/receive_advancement",
                                    customProps: {
                                        emoji: "🏆",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/action_types/advancements/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Blocks",
                            customProps: { emoji: "🧊" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/action_types/blocks/break_block",
                                    customProps: {
                                        emoji: "🪓",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/blocks/place_block",
                                    customProps: {
                                        emoji: "🧱",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/blocks/interact_with_block",
                                    customProps: {
                                        emoji: "🖱️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/blocks/harvest_crop",
                                    customProps: {
                                        emoji: "🌾",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/blocks/plant_crop",
                                    customProps: {
                                        emoji: "🌱",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/blocks/get_destroy_speed",
                                    customProps: {
                                        emoji: "⛏️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/action_types/blocks/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Entities",
                            customProps: { emoji: "👤" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/get_hurt",
                                    customProps: {
                                        emoji: "😖",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/hurt_entity",
                                    customProps: {
                                        emoji: "🗡️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/hurt_player",
                                    customProps: {
                                        emoji: "🩸",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/interact_with_entity",
                                    customProps: {
                                        emoji: "🤝",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/kill_entity",
                                    customProps: {
                                        emoji: "💀",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/death",
                                    customProps: {
                                        emoji: "⚰️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/breed_animal",
                                    customProps: {
                                        emoji: "🐾",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/entities/tame_animal",
                                    customProps: {
                                        emoji: "🐕",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/action_types/entities/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Items",
                            customProps: { emoji: "🎒" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/craft_item",
                                    customProps: {
                                        emoji: "🛠️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/drop_item",
                                    customProps: {
                                        emoji: "🗑️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/enchant_item",
                                    customProps: {
                                        emoji: "✨",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/fish_up_item",
                                    customProps: {
                                        emoji: "🎣",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/grind_item",
                                    customProps: {
                                        emoji: "🔪",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/hurt_item",
                                    customProps: {
                                        emoji: "💔",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/smelt_item",
                                    customProps: {
                                        emoji: "🔥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/throw_item",
                                    customProps: {
                                        emoji: "🏹",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/items/use_item",
                                    customProps: {
                                        emoji: "🖱️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/action_types/items/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Movement",
                            customProps: { emoji: "👟" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/crouch",
                                    customProps: {
                                        emoji: "🧎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/crouch_start",
                                    customProps: {
                                        emoji: "🧎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/crouch_stop",
                                    customProps: {
                                        emoji: "🧎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/elytra_fly",
                                    customProps: {
                                        emoji: "🪽",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/elytra_fly_start",
                                    customProps: {
                                        emoji: "🪽",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/elytra_fly_stop",
                                    customProps: {
                                        emoji: "🪽",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/horse_ride",
                                    customProps: {
                                        emoji: "🐎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/horse_ride_start",
                                    customProps: {
                                        emoji: "🐎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/horse_ride_stop",
                                    customProps: {
                                        emoji: "🐎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/sprint",
                                    customProps: {
                                        emoji: "🏃",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/sprint_start",
                                    customProps: {
                                        emoji: "🏃",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/sprint_stop",
                                    customProps: {
                                        emoji: "🏃",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/swim",
                                    customProps: {
                                        emoji: "🏊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/swim_start",
                                    customProps: {
                                        emoji: "🏊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/swim_stop",
                                    customProps: {
                                        emoji: "🏊",
                                    },
                                },

                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/walk",
                                    customProps: {
                                        emoji: "🚶",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/walk_start",
                                    customProps: {
                                        emoji: "🚶",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/movement/walk_stop",
                                    customProps: {
                                        emoji: "🚶",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/action_types/movement/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Players",
                            customProps: { emoji: "🧑" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/brew_potion",
                                    customProps: {
                                        emoji: "🧪",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/drink",
                                    customProps: {
                                        emoji: "🥛",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/eat",
                                    customProps: {
                                        emoji: "🍽️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/effect_added",
                                    customProps: {
                                        emoji: "💊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/get_attack_speed",
                                    customProps: {
                                        emoji: "⚔️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/rod_reel_in",
                                    customProps: {
                                        emoji: "🎣",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/shoot_projectile",
                                    customProps: {
                                        emoji: "🏹",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/strip_log",
                                    customProps: {
                                        emoji: "🪵",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/action_types/players/use_anvil",
                                    customProps: {
                                        emoji: "⚒️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/action_types/players/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/action_types/index" },
                },
                {
                    type: "category",
                    label: "Reward Types",
                    customProps: { emoji: "🎁" },
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/reward_types/cancel_action",
                            label: "Cancel Action",
                            customProps: { emoji: "❌" },
                        },
                        {
                            type: "category",
                            label: "Blocks",
                            customProps: { emoji: "🧊" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/blocks/block_drop_multiplier",
                                    customProps: {
                                        emoji: "🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/blocks/destroy_speed_multiplier",
                                    customProps: {
                                        emoji: "⛏️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/blocks/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Effects",
                            customProps: { emoji: "💊" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/effects/effect",
                                    customProps: {
                                        emoji: "💊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/effects/remove_effect",
                                    customProps: {
                                        emoji: "❌",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/effects/effect_duration_multiplier",
                                    customProps: {
                                        emoji: "⏳",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/effects/effect_amplifier_addition",
                                    customProps: {
                                        emoji: "➕",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/effects/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Entities",
                            customProps: { emoji: "👤" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/entities/damage_multiplier",
                                    customProps: {
                                        emoji: "🗡️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/entities/entity_on_fire",
                                    customProps: {
                                        emoji: "🔥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/entities/multiple_arrows",
                                    customProps: {
                                        emoji: "🏹",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/entities/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Experience",
                            customProps: { emoji: "✨" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/experience/experience",
                                    customProps: {
                                        emoji: "✨",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/experience/experience_multiplier",
                                    customProps: {
                                        emoji: "✖️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/experience/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Items",
                            customProps: { emoji: "🎒" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/items/item",
                                    customProps: {
                                        emoji: "🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/items/drop_item",
                                    customProps: {
                                        emoji: "🌍",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/items/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Players",
                            customProps: { emoji: "🧑" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/players/attack_speed_multiplier",
                                    customProps: {
                                        emoji: "⚔️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/players/move_to_entity",
                                    customProps: {
                                        emoji: "📍",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/players/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Server",
                            customProps: { emoji: "🌐" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/reward_types/server/command",
                                    customProps: {
                                        emoji: "⚙️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/reward_types/server/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/reward_types/index" },
                },
                {
                    type: "category",
                    label: "Condition Types",
                    customProps: { emoji: "📑" },
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/condition_types/or",
                            label: "OR",
                            customProps: { emoji: "🔀" },
                        },
                        {
                            type: "doc",
                            id: "wiki/condition_types/not",
                            label: "NOT",
                            customProps: { emoji: "❌" },
                        },
                        {
                            type: "category",
                            label: "Blocks",
                            customProps: { emoji: "🧊" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/blocks/block",
                                    customProps: {
                                        emoji: "🧊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/blocks/blocks",
                                    customProps: {
                                        emoji: "🧊🧊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/blocks/block_hardness",
                                    customProps: {
                                        emoji: "⛏️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/blocks/is_ore",
                                    customProps: {
                                        emoji: "💎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/blocks/crop_age",
                                    customProps: {
                                        emoji: "🌱",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/blocks/crop_fully_grown",
                                    customProps: {
                                        emoji: "🌾",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/blocks/not_in_block_position_cache",
                                    customProps: {
                                        emoji: "💾",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/blocks/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Effects",
                            customProps: { emoji: "💊" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/effects/effect",
                                    customProps: {
                                        emoji: "💊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/effects/effect_category",
                                    customProps: {
                                        emoji: "📂",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/effects/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Entities",
                            customProps: { emoji: "👤" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/entities/entity_type",
                                    customProps: {
                                        emoji: "👤",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/entities/entity_types",
                                    customProps: {
                                        emoji: "👥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/entities/entity_in_block",
                                    customProps: {
                                        emoji: "🧊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/entities/damage_source",
                                    customProps: {
                                        emoji: "🩸",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/entities/ready_for_shearing",
                                    customProps: {
                                        emoji: "✂️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/entities/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Experience",
                            customProps: { emoji: "✨" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/experience/dropped_experience",
                                    customProps: {
                                        emoji: "🌍",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/experience/experience_level",
                                    customProps: {
                                        emoji: "🔢",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/experience/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Items",
                            customProps: { emoji: "🎒" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/items/item",
                                    customProps: {
                                        emoji: "🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/items/items",
                                    customProps: {
                                        emoji: "🎒🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/items/item_in_hand",
                                    customProps: {
                                        emoji: "🖐️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/items/item_in_inventory",
                                    customProps: {
                                        emoji: "📦",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/items/item_equipped",
                                    customProps: {
                                        emoji: "👕",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/items/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Movement",
                            customProps: { emoji: "👟" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/movement/distance",
                                    customProps: {
                                        emoji: "📏",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/movement/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Recipes",
                            customProps: { emoji: "🍲" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/recipes/is_blasting_recipe",
                                    customProps: {
                                        emoji: "🔥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/recipes/is_smoking_recipe",
                                    customProps: {
                                        emoji: "💨",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/recipes/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Scoreboard",
                            customProps: { emoji: "📊" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/scoreboard/scoreboard",
                                    customProps: {
                                        emoji: "📊",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/scoreboard/index",
                            },
                        },
                        {
                            type: "category",
                            label: "Team",
                            customProps: { emoji: "👥" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/team/team",
                                    customProps: {
                                        emoji: "👥",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/team/index",
                            },
                        },
                        {
                            type: "category",
                            label: "World",
                            customProps: { emoji: "🌍" },
                            collapsed: true,
                            items: [
                                {
                                    type: "doc",
                                    id: "wiki/condition_types/world/dimension",
                                    customProps: {
                                        emoji: "🌍",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/condition_types/world/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/condition_types/index" },
                },
                {
                    type: "doc",
                    id: "wiki/action_holders/index",
                    label: "Action Holders",
                    customProps: { emoji: "👤" },
                },
                {
                    type: "category",
                    label: "Action Data",
                    customProps: { emoji: "📊" },
                    collapsed: true,
                    items: [],
                    link: { type: "doc", id: "wiki/action_data/index" },
                },
            ],
            link: { type: "doc", id: "wiki/index" },
        },
    ],
};

export default sidebar;
