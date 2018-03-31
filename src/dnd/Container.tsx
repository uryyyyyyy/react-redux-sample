import * as React from 'react'
import { useCallback, useState } from 'react'
import Card from './Card'
import * as _ from 'lodash'
import { RouteComponentProps } from 'react-router'

interface ICard {
  id: number
  text: string
}

const initialCards: ICard[] = [
  {
    id: 1,
    text: 'Write a cool JS library'
  },
  {
    id: 2,
    text: 'Make it generic enough'
  },
  {
    id: 3,
    text: 'Write README'
  },
  {
    id: 4,
    text: 'Create some examples'
  },
  {
    id: 5,
    text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
  },
  {
    id: 6,
    text: '???'
  },
  {
    id: 7,
    text: 'PROFIT'
  }
]

export default function Container(_unused: RouteComponentProps<{}>) {
  const [cards, setCards] = useState(initialCards)

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const targetList = _.clone(cards)
      const target = _.nth(targetList, dragIndex)
      if (!target) return
      targetList.splice(dragIndex, 1)
      targetList.splice(hoverIndex, 0, target)
      setCards(targetList)
    },
    [cards]
  )

  return (
    <div style={{ width: 400 }}>
      {cards.map((card: ICard, i: number) => (
        <Card key={card.id} index={i} id={card.id} text={card.text} moveCard={moveCard} />
      ))}
    </div>
  )
}
