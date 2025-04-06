import Page from "../UI/Page"
import PageHeader from "../UI/PageHeader"
import Table from "../UI/Table"
const Headers = [
  {
      name: "Player Name",
  },
  {
      name: "V",
      desc: "Victories"
  },
  {
      name: "PR",
      desc: "PR"
  },
  {
      name: "Points",
      desc: "Points"
  },
  {
      name: "PA",
      desc: "PA"
  },
  {
      name: "Scoring%",
      desc: "Score"
  },
  {
      name: "P/PA",
      desc: "P/PA"
  },
  {
      name: "W",
      desc: "W"
  },
  {
      name: "L",
      desc: "L"
  },
  {
      name: "Win %",
      desc: "Win %"
  },
  {
      name: "30s",
      desc: "30s"
  },
  {
      name: "8 Ball Break",
      desc: "8 Ball Break"
  },
  {
      name: "Break run",
      desc: "Break run"
  },
  {
      name: "10-0s",
      desc: "10-0s"
  },
  {
      name: "Win Strk",
      desc: "Win Strk"
  },
  {
      name: "MA",
      desc: "MA"
  },
  {
      name: "M",
      desc: "M"
  },
]

const TopTeams = ({title})=>{
    const playerData = [
            { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
            { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
            { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
            { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
            { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
            { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
            { name: "John Doe", v: 10, pr: 5, points: 50, pa: 20, scoring: "75%", ppa: 2.5, w: 8, l: 2, winpct: "80%", thirties: 3, eightball: 1, breakrun: 2, tenzeros: 1, winstrk: 5, ma: 15, m: 10 },
            { name: "Jane Smith", v: 8, pr: 4, points: 40, pa: 18, scoring: "70%", ppa: 2.2, w: 6, l: 3, winpct: "66%", thirties: 2, eightball: 0, breakrun: 1, tenzeros: 0, winstrk: 3, ma: 12, m: 8 },
          ]
      console.log(Headers)
    return (
        <Page>
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl  mx-auto p-4 bg-white text-slate-900">
          <div className="flex flex-col w-full gap-4">
            <PageHeader heading={title} />
            <Table tableHeaders={Headers} data={playerData}/>
          </div>
        </div>
      </div>
    </Page>
    )
}
export default TopTeams