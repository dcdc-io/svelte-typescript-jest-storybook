import ask from '../../engine/ask'

const journey = ask(
    'Where do you work?'
).then(
    place => ask(
        `What is your role at ${place}?`
    ).then(
        role => ask(
            `What have you done as ${role} at ${place}?`,
            ['Built a framework', 'Lead a team', 'Earned a certificate']
        ).then(
            achievements => ask(
                ''
            )
        )
    )
)