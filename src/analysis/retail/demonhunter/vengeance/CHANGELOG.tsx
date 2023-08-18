import { change, date } from 'common/changelog';
import { Putro, ToppleTheNun } from 'CONTRIBUTORS';
import SpellLink from 'interface/SpellLink';
import SPELLS from 'common/SPELLS/demonhunter';
import TALENTS from 'common/TALENTS/demonhunter';
import SHARED_CHANGELOG from 'analysis/retail/demonhunter/shared/CHANGELOG';

// prettier-ignore
export default [
  change(date(2023, 8, 18), 'Temporarily disable Fiery Brand analysis due to Burning Alive shenanigans.', ToppleTheNun),
  change(date(2023, 7, 11), 'Update for 10.1.5.', ToppleTheNun),
  change(date(2023, 7, 9), <>Add statistic about amount of <SpellLink spell={SPELLS.DEMON_SPIKES} /> wasted.</>, ToppleTheNun),
  change(date(2023, 7, 8), <>Fix determination of <SpellLink spell={TALENTS.FRACTURE_TALENT} /> quality based on Fury amounts.</>, ToppleTheNun),
  change(date(2023, 3, 21), <>Fix some good <SpellLink spell={TALENTS.SPIRIT_BOMB_TALENT} /> casts showing as bad.</>, ToppleTheNun),
  change(date(2023, 3, 16), 'Update the default log.', ToppleTheNun),
  change(date(2023, 3, 9), <>Add <SpellLink spell={TALENTS.SIGIL_OF_FLAME_TALENT} /> to Rotation section in guide.</>, ToppleTheNun),
  change(date(2023, 3, 9), <>Re-add <SpellLink spell={SPELLS.IMMOLATION_AURA} /> cast efficiency to guide.</>, ToppleTheNun),
  change(date(2023, 3, 9), 'Update Rotation section.', ToppleTheNun),
  change(date(2023, 2, 25), <>Fixed  consuming the last stack of <SpellLink spell={SPELLS.SOUL_FRAGMENT_STACK} /> not granting credit on casting <SpellLink spell={TALENTS.SPIRIT_BOMB_TALENT} />.</>, ToppleTheNun),
  change(date(2023, 1, 30), <>Fixed an issue where the graph for <SpellLink spell={SPELLS.SOUL_FRAGMENT_STACK} /> would show incorrect values for a given point in time.</>, Putro),
  change(date(2023, 1, 11), 'Log cast summary and breakdown events when clicked.', ToppleTheNun),
  change(date(2023, 1, 3), <>Fix Soul Fragment detection for <SpellLink spell={TALENTS.SPIRIT_BOMB_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 12, 19), 'Add opt-in toggle for hiding rotation explanations.', ToppleTheNun),
  change(date(2022, 12, 19), 'Add opt-in toggle for new defensives section.', ToppleTheNun),
  change(date(2022, 12, 18), 'Further refine defensive buff tracking.', ToppleTheNun),
  change(date(2022, 12, 18), 'Properly remove defensive buffs on death.', ToppleTheNun),
  change(date(2022, 12, 16), 'Disable the Checklist.', ToppleTheNun),
  change(date(2022, 12, 15), 'Remove "Return to Normal View" link from the Guide.', ToppleTheNun),
  change(date(2022, 12, 15), <>Reduce number of <SpellLink spell={SPELLS.FRAILTY} /> required for a good <SpellLink spell={TALENTS.SOUL_CARVER_TALENT} /> to 5.</>, ToppleTheNun),
  change(date(2022, 12, 5), 'Update Vengeance guide based on feedback from Fel Hammer.', ToppleTheNun),
  change(date(2022, 12, 4), 'Mark the Guide as the default view.', ToppleTheNun),
  change(date(2022, 12, 4), 'Remove recommended enchants.', ToppleTheNun),
  change(date(2022, 12, 4), <>Add <SpellLink spell={SPELLS.SOUL_CLEAVE} /> and <SpellLink spell={TALENTS.SPIRIT_BOMB_TALENT} /> per-cast breakdowns.</>, ToppleTheNun),
  change(date(2022, 12, 4), <>Hide <SpellLink spell={TALENTS.SPIRIT_BOMB_TALENT} /> statistic when there are no casts of it. Remove <SpellLink spell={TALENTS.SPIRIT_BOMB_TALENT} /> and <SpellLink spell={SPELLS.SOUL_CLEAVE} /> defensive checklist items.</>, ToppleTheNun),
  change(date(2022, 11, 28), 'Remove gray backgrounds from most subsections in Guide.', ToppleTheNun),
  change(date(2022, 11, 27), 'Re-organize and internationalize Guide.', ToppleTheNun),
  change(date(2022, 11, 21), <>Fix degradation of <SpellLink spell={TALENTS.THE_HUNT_TALENT} /> due to pre-casts.</>, ToppleTheNun),
  change(date(2022, 11, 20), <>Automatically minimize icons on cooldown graphs if any cooldown was cast 10 or more times.</>, ToppleTheNun),
  change(date(2022, 11, 20), <>Add per-cast breakdown for <SpellLink spell={SPELLS.IMMOLATION_AURA} /> to the Guide.</>, ToppleTheNun),
  change(date(2022, 11, 20), <>Add cast efficiency for <SpellLink spell={SPELLS.IMMOLATION_AURA} /> to the Guide.</>, ToppleTheNun),
  change(date(2022, 11, 15), <>Add per-cast breakdown for <SpellLink spell={TALENTS.FEL_DEVASTATION_TALENT} /> to the Guide.</>, ToppleTheNun),
  change(date(2022, 11, 15), <>Add per-cast breakdown for <SpellLink spell={TALENTS.SOUL_CARVER_TALENT} /> to the Guide.</>, ToppleTheNun),
  change(date(2022, 11, 15), <>Add per-cast breakdown for <SpellLink spell={TALENTS.FRACTURE_TALENT} /> to the Guide.</>, ToppleTheNun),
  change(date(2022, 11, 15), <>Fix <SpellLink spell={TALENTS.PAINBRINGER_TALENT} /> duration in statistic tooltip.</>, ToppleTheNun),
  change(date(2022, 11, 14), <>Add <SpellLink spell={TALENTS.THE_HUNT_TALENT} /> cast breakdown to the Guide.</>, ToppleTheNun),
  change(date(2022, 11, 14), <>Add <SpellLink spell={SPELLS.METAMORPHOSIS_TANK} /> support to the Guide.</>, ToppleTheNun),
  change(date(2022, 11, 10), 'Fix Throw Glaive tracking.', ToppleTheNun),
  change(date(2022, 11, 10), <>Prevent <SpellLink spell={TALENTS.SIGIL_OF_MISERY_TALENT} /> and <SpellLink spell={TALENTS.SIGIL_OF_SILENCE_TALENT} /> from appearing in statistics if untalented.</>, ToppleTheNun),
  change(date(2022, 11, 10), 'Mark as fully supported.', ToppleTheNun),
  change(date(2022, 11, 10), <>Remove Fury overcapping suggestions from <SpellLink spell={TALENTS.DISRUPTING_FURY_TALENT} /> and <SpellLink spell={TALENTS.SWALLOWED_ANGER_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 11, 8), 'Move some spells to a shared spellbook.', ToppleTheNun),
  change(date(2022, 11, 1), <>Add <SpellLink spell={SPELLS.FRAILTY} /> section to Guide.</>, ToppleTheNun),
  change(date(2022, 10, 31), 'Update talent-based statistics to show talent rank.', ToppleTheNun),
  change(date(2022, 10, 31), <>Remove misleading <SpellLink spell={TALENTS.SIGIL_OF_FLAME_TALENT} /> statistic.</>, ToppleTheNun),
  change(date(2022, 10, 31), 'Mark Vengeance DH as partially supported for 10.0.0.', ToppleTheNun),
  change(date(2022, 10, 26), 'Enable guide for Vengeance DH.', ToppleTheNun),
  change(date(2022, 10, 22), 'Add Soul Fragment buff stack tracking to Guide.', ToppleTheNun),
  change(date(2022, 10, 22), 'Setup initial Vengeance DH guide.', ToppleTheNun),
  change(date(2022, 10, 22), <>Enable Soul Overcap analysis even when <SpellLink spell={TALENTS.FEED_THE_DEMON_TALENT} /> is taken.</>, ToppleTheNun),
  change(date(2022, 10, 16), <>Add mitigation tracking for <SpellLink spell={TALENTS.FIERY_BRAND_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 10, 16), <>Add support for <SpellLink spell={TALENTS.DISRUPTING_FURY_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 10, 15), <>Add support for <SpellLink spell={TALENTS.FLAMES_OF_FURY_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 10, 15), <>Add support for <SpellLink spell={TALENTS.STOKE_THE_FLAMES_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 10, 15), <>Correct cooldown for <SpellLink spell={TALENTS.FIERY_BRAND_TALENT} /> when <SpellLink spell={TALENTS.DOWN_IN_FLAMES_TALENT} /> is talented.</>, ToppleTheNun),
  change(date(2022, 10, 15), <>Add support for <SpellLink spell={TALENTS.UNNATURAL_MALICE_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 10, 15), <>Correct detection of <SpellLink spell={TALENTS.ELYSIAN_DECREE_TALENT} /> damage.</>, ToppleTheNun),
  change(date(2022, 10, 15), <>Add support for <SpellLink spell={TALENTS.SWALLOWED_ANGER_TALENT} />.</>, ToppleTheNun),
  change(date(2022, 10, 14), 'Correct some spell cooldowns and add missing spells.', ToppleTheNun),
  change(date(2022, 10, 13), 'Standardize Fury tracking across Havoc and Vengeance.', ToppleTheNun),
  change(date(2022, 10, 10), <>Improve detection of bad <SpellLink spell={SPELLS.SHEAR} /> and <SpellLink spell={TALENTS.FRACTURE_TALENT} /> casts.</>, ToppleTheNun),
  change(date(2022, 9, 22), 'Update to latest Havoc patch from 9/21/2022.', ToppleTheNun),
  change(date(2022, 9, 7), 'Begin working on support for Dragonflight.', ToppleTheNun),
  ...SHARED_CHANGELOG,
];
