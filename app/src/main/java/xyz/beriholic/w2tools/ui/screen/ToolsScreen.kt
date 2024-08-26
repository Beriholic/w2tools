package xyz.beriholic.w2tools.ui.screen

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.lazy.grid.rememberLazyGridState
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.ramcosta.composedestinations.annotation.Destination
import com.ramcosta.composedestinations.annotation.RootNavGraph
import com.ramcosta.composedestinations.navigation.DestinationsNavigator
import xyz.beriholic.w2tools.model.Tool
import xyz.beriholic.w2tools.ui.screen.destinations.AESDestination
import xyz.beriholic.w2tools.ui.screen.destinations.Base64Destination
import xyz.beriholic.w2tools.ui.screen.destinations.DESDestination
import xyz.beriholic.w2tools.ui.screen.destinations.HEXDestination
import xyz.beriholic.w2tools.ui.screen.destinations.MD5Destination
import xyz.beriholic.w2tools.ui.screen.destinations.PunyCodeDestination
import xyz.beriholic.w2tools.ui.screen.destinations.RgbHexDestination
import xyz.beriholic.w2tools.ui.screen.destinations.SHADestination
import xyz.beriholic.w2tools.ui.screen.destinations.ScaleDestination
import xyz.beriholic.w2tools.ui.screen.destinations.URLDestination

@OptIn(ExperimentalMaterial3Api::class)
@Composable
@Destination
@RootNavGraph(start = true)
fun ToolsScreen(
    navigator: DestinationsNavigator,
) {
    val tools by remember {
        mutableStateOf(
            listOf(
                Tool("Base64编码/解码", Base64Destination),
                Tool("URL编码/解码", URLDestination),
                Tool("Hex编码/解码", HEXDestination),
                Tool("PunyCode编码/解码", PunyCodeDestination),
                Tool("MD5加密", MD5Destination),
                Tool("SHA加密", SHADestination),
                Tool("AES加密/解密", AESDestination),
                Tool("DES加密/解密", DESDestination),
                Tool("RGB/HEX转换", RgbHexDestination),
                Tool("进制转换", ScaleDestination)
            )
        )
    }


    Scaffold(
        topBar = {
            TopAppBar(title = { Text(text = "W2Tools") })
        }
    ) { inPadding ->
        Box(
            modifier = Modifier.padding(inPadding)
        ) {
            val scrollState = rememberLazyGridState()
            LazyVerticalGrid(
                columns = GridCells.Fixed(2),
                state = scrollState,

                ) {
                itemsIndexed(tools) { index, tool ->
                    key(index) {
                        ToolItem(tool) {
                            tool.destination?.let { navigator.navigate(it) }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun ToolItem(tool: Tool, onClick: () -> Unit) {
    Surface(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        tonalElevation = 16.dp,
        shape = MaterialTheme.shapes.medium,
        onClick = onClick
    ) {
        Column(
            modifier = Modifier.padding(16.dp)
        ) {
            Text(text = tool.name)
        }
    }
}