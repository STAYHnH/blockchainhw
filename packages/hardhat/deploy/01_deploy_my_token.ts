// 导入 hardhat-deploy 所需的类型
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// 定义部署函数
const deployMyToken: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // 从 hre (Hardhat Runtime Environment) 中获取部署相关的工具和账户信息
  const { deployer } = await hre.getNamedAccounts(); // 获取部署者账户地址
  const { deploy } = hre.deployments; // 获取部署函数

  // 调用 deploy 函数来部署合约
  await deploy("MyToken", {
    // 第一个参数 "MyToken" 必须和你的合约名完全一致
    from: deployer, // 指定由哪个账户发起部署交易
    args: [], // 我们的 MyToken 合约构造函数不需要参数，所以这里是空数组
    log: true, // 在终端打印部署信息（如交易哈希和合约地址）
    autoMine: true, // 在本地测试网络上部署后自动挖矿确认交易
  });
};

// 导出部署函数
export default deployMyToken;

deployMyToken.tags = ["ERC20DYF202330550301"];
