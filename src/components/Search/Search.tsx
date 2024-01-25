type SearchProps = {
	loadUser: (username: string) => Promise<void>
}

import classes from './Search.module.css'
import { useState, KeyboardEvent } from "react"
import { BsSearch } from "react-icons/bs"

const Search = ({ loadUser }: SearchProps) => {
	const [userName, setUsername] = useState("")
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			loadUser(userName)
		}
	}

	return (
		<div className={classes.search}>
			<h2>Busque por usuário:</h2>
			<p>Conheça seus melhores repositórios</p>
			<div className={classes.search_container}>
				<input
					type="text"
					placeholder="Digite o nome do usuário"
					onChange={(e) => setUsername(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
				<button onClick={() => loadUser(userName)}>
					<BsSearch />
				</button>
			</div>
		</div>
	)
}

export default Search