import { useEffect } from "react"
import { Navbar } from "../../componets/navbars/Navbar"
import { LoadingSpinner } from "../../componets/LoadingSpinner"
import { Content } from "../../componets/dashboard/Content"
import { Sidebar } from "../../componets/navbars/Sidebar"
import { useUserDetails } from "../../shared/hooks"
import { useChannels } from "../../shared/hooks/useChannels"
import './dashboardPage.css'


export const DashboardPage = () => {

  const { getChannels, allChannels, isFetching, followedChannels } = useChannels()
  const { isLogged } = useUserDetails()
  
  useEffect(() => {
    
    getChannels(isLogged)

  }, [])

  if (isFetching) {
    
    return <LoadingSpinner/>

  }

  return (
    <div>
      <Navbar />
      <Sidebar channels={followedChannels} />
      <Content channels={allChannels} getChannels={getChannels}/>
    </div>
  )
}
