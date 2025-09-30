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
                                    id: "wiki/actions/advancements/receive_advancement",
                                    customProps: {
                                        emoji: "🏆",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/actions/advancements/index",
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
                                    id: "wiki/actions/blocks/break_block",
                                    customProps: {
                                        emoji: "🪓",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/blocks/place_block",
                                    customProps: {
                                        emoji: "🧱",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/blocks/interact_with_block",
                                    customProps: {
                                        emoji: "🖱️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/blocks/harvest_crop",
                                    customProps: {
                                        emoji: "🌾",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/blocks/plant_crop",
                                    customProps: {
                                        emoji: "🌱",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/blocks/get_destroy_speed",
                                    customProps: {
                                        emoji: "⛏️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/actions/blocks/index",
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
                                    id: "wiki/actions/entities/get_hurt",
                                    customProps: {
                                        emoji: "😖",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/entities/hurt_entity",
                                    customProps: {
                                        emoji: "🗡️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/entities/hurt_player",
                                    customProps: {
                                        emoji: "🩸",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/entities/interact_with_entity",
                                    customProps: {
                                        emoji: "🤝",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/entities/kill_entity",
                                    customProps: {
                                        emoji: "💀",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/entities/death",
                                    customProps: {
                                        emoji: "⚰️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/entities/breed_animal",
                                    customProps: {
                                        emoji: "🐾",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/entities/tame_animal",
                                    customProps: {
                                        emoji: "🐕",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/actions/entities/index",
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
                                    id: "wiki/actions/items/craft_item",
                                    customProps: {
                                        emoji: "🛠️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/drop_item",
                                    customProps: {
                                        emoji: "🗑️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/enchant_item",
                                    customProps: {
                                        emoji: "✨",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/fish_up_item",
                                    customProps: {
                                        emoji: "🎣",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/grind_item",
                                    customProps: {
                                        emoji: "🔪",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/hurt_item",
                                    customProps: {
                                        emoji: "💔",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/smelt_item",
                                    customProps: {
                                        emoji: "🔥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/throw_item",
                                    customProps: {
                                        emoji: "🏹",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/items/use_item",
                                    customProps: {
                                        emoji: "🖱️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/actions/items/index",
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
                                    id: "wiki/actions/movement/crouch",
                                    customProps: {
                                        emoji: "🧎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/crouch_start",
                                    customProps: {
                                        emoji: "🧎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/crouch_stop",
                                    customProps: {
                                        emoji: "🧎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/elytra_fly",
                                    customProps: {
                                        emoji: "🪽",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/elytra_fly_start",
                                    customProps: {
                                        emoji: "🪽",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/elytra_fly_stop",
                                    customProps: {
                                        emoji: "🪽",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/horse_ride",
                                    customProps: {
                                        emoji: "🐎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/horse_ride_start",
                                    customProps: {
                                        emoji: "🐎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/horse_ride_stop",
                                    customProps: {
                                        emoji: "🐎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/sprint",
                                    customProps: {
                                        emoji: "🏃",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/sprint_start",
                                    customProps: {
                                        emoji: "🏃",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/sprint_stop",
                                    customProps: {
                                        emoji: "🏃",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/swim",
                                    customProps: {
                                        emoji: "🏊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/swim_start",
                                    customProps: {
                                        emoji: "🏊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/swim_stop",
                                    customProps: {
                                        emoji: "🏊",
                                    },
                                },

                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/walk",
                                    customProps: {
                                        emoji: "🚶",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/walk_start",
                                    customProps: {
                                        emoji: "🚶",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/movement/walk_stop",
                                    customProps: {
                                        emoji: "🚶",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/actions/movement/index",
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
                                    id: "wiki/actions/players/brew_potion",
                                    customProps: {
                                        emoji: "🧪",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/drink",
                                    customProps: {
                                        emoji: "🥛",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/eat",
                                    customProps: {
                                        emoji: "🍽️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/effect_added",
                                    customProps: {
                                        emoji: "💊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/get_attack_speed",
                                    customProps: {
                                        emoji: "⚔️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/rod_reel_in",
                                    customProps: {
                                        emoji: "🎣",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/shoot_projectile",
                                    customProps: {
                                        emoji: "🏹",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/strip_log",
                                    customProps: {
                                        emoji: "🪵",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/actions/players/use_anvil",
                                    customProps: {
                                        emoji: "⚒️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/actions/players/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/actions/index" },
                },
                {
                    type: "category",
                    label: "Reward Types",
                    customProps: { emoji: "🎁" },
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/rewards/cancel_action",
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
                                    id: "wiki/rewards/blocks/block_drop_multiplier",
                                    customProps: {
                                        emoji: "🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/blocks/destroy_speed_multiplier",
                                    customProps: {
                                        emoji: "⛏️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/rewards/blocks/index",
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
                                    id: "wiki/rewards/effects/effect",
                                    customProps: {
                                        emoji: "💊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/effects/remove_effect",
                                    customProps: {
                                        emoji: "❌",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/effects/effect_duration_multiplier",
                                    customProps: {
                                        emoji: "⏳",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/effects/effect_amplifier_addition",
                                    customProps: {
                                        emoji: "➕",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/rewards/effects/index",
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
                                    id: "wiki/rewards/entities/damage_multiplier",
                                    customProps: {
                                        emoji: "🗡️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/entities/entity_on_fire",
                                    customProps: {
                                        emoji: "🔥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/entities/multiple_arrows",
                                    customProps: {
                                        emoji: "🏹",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/rewards/entities/index",
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
                                    id: "wiki/rewards/experience/experience",
                                    customProps: {
                                        emoji: "✨",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/experience/experience_multiplier",
                                    customProps: {
                                        emoji: "✖️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/rewards/experience/index",
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
                                    id: "wiki/rewards/items/item",
                                    customProps: {
                                        emoji: "🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/items/drop_item",
                                    customProps: {
                                        emoji: "🌍",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/rewards/items/index",
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
                                    id: "wiki/rewards/players/attack_speed_multiplier",
                                    customProps: {
                                        emoji: "⚔️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/rewards/players/move_to_entity",
                                    customProps: {
                                        emoji: "📍",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/rewards/players/index",
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
                                    id: "wiki/rewards/server/command",
                                    customProps: {
                                        emoji: "⚙️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/rewards/server/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/rewards/index" },
                },
                {
                    type: "category",
                    label: "Condition Types",
                    customProps: { emoji: "📑" },
                    collapsed: true,
                    items: [
                        {
                            type: "doc",
                            id: "wiki/conditions/or",
                            label: "OR",
                            customProps: { emoji: "🔀" },
                        },
                        {
                            type: "doc",
                            id: "wiki/conditions/not",
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
                                    id: "wiki/conditions/blocks/block",
                                    customProps: {
                                        emoji: "🧊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/blocks/blocks",
                                    customProps: {
                                        emoji: "🧊🧊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/blocks/block_hardness",
                                    customProps: {
                                        emoji: "⛏️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/blocks/is_ore",
                                    customProps: {
                                        emoji: "💎",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/blocks/crop_age",
                                    customProps: {
                                        emoji: "🌱",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/blocks/crop_fully_grown",
                                    customProps: {
                                        emoji: "🌾",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/blocks/not_in_block_position_cache",
                                    customProps: {
                                        emoji: "💾",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/blocks/index",
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
                                    id: "wiki/conditions/effects/effect",
                                    customProps: {
                                        emoji: "💊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/effects/effect_category",
                                    customProps: {
                                        emoji: "📂",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/effects/index",
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
                                    id: "wiki/conditions/entities/entity_type",
                                    customProps: {
                                        emoji: "👤",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/entities/entity_types",
                                    customProps: {
                                        emoji: "👥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/entities/entity_in_block",
                                    customProps: {
                                        emoji: "🧊",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/entities/damage_source",
                                    customProps: {
                                        emoji: "🩸",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/entities/ready_for_shearing",
                                    customProps: {
                                        emoji: "✂️",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/entities/index",
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
                                    id: "wiki/conditions/experience/dropped_experience",
                                    customProps: {
                                        emoji: "🌍",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/experience/experience_level",
                                    customProps: {
                                        emoji: "🔢",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/experience/index",
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
                                    id: "wiki/conditions/items/item",
                                    customProps: {
                                        emoji: "🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/items/items",
                                    customProps: {
                                        emoji: "🎒🎒",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/items/item_in_hand",
                                    customProps: {
                                        emoji: "🖐️",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/items/item_in_inventory",
                                    customProps: {
                                        emoji: "📦",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/items/item_equipped",
                                    customProps: {
                                        emoji: "👕",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/items/index",
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
                                    id: "wiki/conditions/movement/distance",
                                    customProps: {
                                        emoji: "📏",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/movement/index",
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
                                    id: "wiki/conditions/recipes/is_blasting_recipe",
                                    customProps: {
                                        emoji: "🔥",
                                    },
                                },
                                {
                                    type: "doc",
                                    id: "wiki/conditions/recipes/is_smoking_recipe",
                                    customProps: {
                                        emoji: "💨",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/recipes/index",
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
                                    id: "wiki/conditions/scoreboard/scoreboard",
                                    customProps: {
                                        emoji: "📊",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/scoreboard/index",
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
                                    id: "wiki/conditions/team/team",
                                    customProps: {
                                        emoji: "👥",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/team/index",
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
                                    id: "wiki/conditions/world/dimension",
                                    customProps: {
                                        emoji: "🌍",
                                    },
                                },
                            ],
                            link: {
                                type: "doc",
                                id: "wiki/conditions/world/index",
                            },
                        },
                    ],
                    link: { type: "doc", id: "wiki/conditions/index" },
                },
            ],
            link: { type: "doc", id: "wiki/index" },
        },
    ],
};

export default sidebar;
