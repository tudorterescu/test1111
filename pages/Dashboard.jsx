// UI Components
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

// Components from different files
import Switcher from "../elements/Dashboard/Switcher"
import DashNav from "../elements/Dashboard/DashNav"
import Search from "../elements/Dashboard/Search"
import UserNav from "../elements/Dashboard/UserNav"
import CalendarDateRangePicker from "../elements/Dashboard/CalendarDatePicker"
import OverviewTab from "../elements/Dashboard/Tabs/OverviewTab"

const Dashboard = () => {
	return (
		<div>
			<Card className="m-10">
				<CardContent>
					<div className="flex items-center justify-between border-b pb-5">
						<div className="pt-5 flex flex-row items-center gap-5">
							<Switcher />
							<DashNav />
						</div>

						<div className="flex flex-row items-center gap-3">
							<Search />
							<UserNav />
						</div>
					</div>

					<div className="flex flex-row items-center justify-between pt-5">
						<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
						<div className="flex flex-row items-center space-x-2">
							<CalendarDateRangePicker />
							<Button>Submit</Button>
						</div>
					</div>

					<Tabs defaultValue="overview" className="space-y-4 pt-5">
						<TabsList>
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="analytics" disabled>
								Analytics
							</TabsTrigger>
							<TabsTrigger value="reports" disabled>
								Reports
							</TabsTrigger>
							<TabsTrigger value="notifications" disabled>
								Notifications
							</TabsTrigger>
						</TabsList>
						<TabsContent value="overview" className="space-y-4">
							<OverviewTab />
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	)
}

export default Dashboard
