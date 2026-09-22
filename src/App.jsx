import './App.css'

function Card({ children }) {
  return <div className="card">{children}</div>
}

function UserCard({ name, age }) {
  return (
    <>
      <h2>{name}</h2>
      <p>Возраст: {age}</p>
    </>
  )
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>
}

function App() {
  const users = [
    { name: 'Илья', age: 21 },
    { name: 'Рома', age: 25 },
    { name: 'Мария', age: 19 },
  ]

  return (
    <main>
      <h1>Пользователи</h1>

      <section className="cards">
        {users.map((user) => (
          <Card key={user.name}>
            <UserCard name={user.name} age={user.age} />
          </Card>
        ))}
      </section>

      <div className="buttons">
        <Button onClick={() => alert('Первая кнопка нажата')}>
          Alert
        </Button>
        <Button onClick={() => console.log('Вторая кнопка нажата')}>
          console.log
        </Button>
      </div>
    </main>
  )
}

export default App
