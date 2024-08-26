package xyz.beriholic.w2tools

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.compose.rememberNavController
import com.example.w2tools.ui.theme.W2toolsTheme
import com.ramcosta.composedestinations.DestinationsNavHost
import dagger.hilt.android.AndroidEntryPoint
import xyz.beriholic.w2tools.ui.component.AppBottomBar
import xyz.beriholic.w2tools.ui.screen.NavGraphs

@AndroidEntryPoint
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            W2toolsTheme {
                val navController = rememberNavController()

                Scaffold(
                    bottomBar = { AppBottomBar(navController) }
                ) { inPadding ->
                    val noUse = inPadding
                    DestinationsNavHost(
                        navGraph = NavGraphs.root,
                        navController = navController,
                        modifier = Modifier.padding(bottom = 80.dp)
                    )
                }
            }
        }
    }
}
