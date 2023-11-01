import { Button } from "@/components/ui/button"
import UserAuthForm from "@/components/user-auth-form"

const Authentication = () => {
	return (
		<>
			<div className="container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				<Button
					variant="link"
					className="absolute right-4 top-4 md:right-8 md-top-8"
				>
					Login
				</Button>
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-6 w-6"
						>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
						</svg>
						Enduro Wallet
					</div>
					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;This is quite literally the best thing that has ever
								happened to me. Maybe now I will be able to afford all my
								Monster energy drinks!&rdquo;
							</p>
							<footer className="text-sm">Tudor Turescu</footer>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-semibold tracking-tight">
								Create an account
							</h1>
							<p className="text-sm text-muted-foreground">
								Enter your email below to create your account
							</p>
						</div>
						<UserAuthForm />
						<p className="px-8 text-center text-sm text-muted-foreground">
							By clicking continue, you agree to our Terms of Service and
							Privacy Policy.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Authentication
