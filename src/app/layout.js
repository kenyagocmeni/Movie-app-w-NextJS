import '../../styles/globals.css';
import Header from '../../components/Header';
import ReduxProvider from '../../redux/provider';

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Header />
                <ReduxProvider className="p-4">{children}</ReduxProvider>
            </body>
        </html>
    );
}